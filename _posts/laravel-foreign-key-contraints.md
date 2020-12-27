---
title: 'Laravel foreign key constraints'
excerpt: 'A FOREIGN KEY is a key that is used to establish and enforce a link
between 2 database tables. '
coverImage: '/assets/blog/laravel-foreign-key-constraints-cover.jpeg'
figcaption: 'Photo by <a href="https://unsplash.com/@niko_76" target="_blank" rel="noopener">Nicolae Valera</a> on <a href="https://unsplash.com/" target="_blank" rel="noopener">Unsplash</a>'
date: '2020-12-27T00:00:00.322Z'
author:
  name: Bojan Petkovski
ogImage:
  url: '/assets/blog/bradford-nicolas-gWfmINd9-yY-unsplash.jpeg'
---

A FOREIGN KEY is a key that is used to establish and enforce a link
between 2 database tables. 
The FOREIGN KEY represents a column, or a combination of columns used
to identify the relationship between the child table that stores the
FOREIGN KEY and the parent or referent table that is referenced 
by its PRIMARY KEY. Basically, FOREIGN KEY constraints enforce referential integrity.

<a href="https://en.wikipedia.org/wiki/Referential_integrity" target="_blank" rel="noopener">Referential integrity</a> 
is a property of data stating that all its 
references are valid. In the context of relational databases, 
it requires that if a value of one attribute (column) of a 
relation (table) references a value of another attribute 
(either in the same or a different relation), then the referenced value must exist.

Let's start with a simple example how we can achieve this in a Laravel application.

We will define a `user_id` column on the `posts` table that references the `id` column on a `users` table:

```php
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

Schema::table('posts', function (Blueprint $table) {
    $table->unsignedBigInteger('user_id');

    $table->foreign('user_id')
        ->references('id')
        ->on('users');
});
```

We can also rewrite this in a more readable manner:

```php
Schema::table('posts', function (Blueprint $table) {
    $table->foreignId('user_id')
        ->constrained();
});
```

Where `foreignId` is an alias of the `unsignedBigInteger` method, while the `constrained`
method will try to find the table, and the column that are referenced. In our example
it will try to find the `users` table and the `id` column. Also, you can specify the
table name as an argument to the `constrained` method.

```php 
Schema::table('posts', function (Blueprint $table) {
    $table->foreignId('user_id')
        ->constrained('users');
});
```

One thing to keep in mind is that all the column modifiers must be called before
the `constrained` method.

```php 
$table->foreignId('user_id')
    ->nullable()
    ->constrained();
```

## Disable foreign key checks

Foreign key checks will prevent you from making database updates in tables that have 
foreign key constraints. Such cases can be when you want to drop or truncate a table,
when you want to migrate old data, etc. Unless you disable the foreign key checks,
you will be prevented from doing these things in a table referenced by a 
foreign key constraint. Luckily it is simple to do it in Laravel, with a few gotchas, here and there.
You can enable or disable the foreign key constraints in your migrations or seeders 
by using these methods:

```php 
Schema::enableForeignKeyConstraints();

Schema::disableForeignKeyConstraints();
```

They return different database statements depending on the type of database used.

```php 
/**
 * Enable foreign key constraints.
 *
 * @return bool
 */
public function enableForeignKeyConstraints()
{
    return $this->connection->statement(
        $this->grammar->compileEnableForeignKeyConstraints()
    );
}

/**
 * Disable foreign key constraints.
 *
 * @return bool
 */
public function disableForeignKeyConstraints()
{
    return $this->connection->statement(
        $this->grammar->compileDisableForeignKeyConstraints()
    );
}
```

Let's see what is used under the hood, and the different issues that you can 
encounter while trying to disable the foreign key constraints.

### MySQL

When using MySQL as your database you can disable/enable the foreign key checks
by running the following commands.

To disable foreign key checks, you need to set the `FOREIGN_KEY_CHECKS` variable to 0:

```mysql
SET FOREIGN_KEY_CHECKS = 0;
```

To enable the foreign key constraint check, you need to set the value of the `FOREIGN_KEY_CHECKS` to 1:

```mysql
SET FOREIGN_KEY_CHECKS = 1;
```

Also, you should know that setting the variable `FOREIGN_KEY_CHECKS` to 1, will not
trigger any validation checks to the data that has been added while the 
foreign key checks were disabled.

One way to do this in Laravel would be to run a database statement:

```php 
DB::statement('SET FOREIGN_KEY_CHECKS = 0;');

// Run your migrations or seeder

DB::statement('SET FOREIGN_KEY_CHECKS = 1;');
```

Another way is to use the before mentioned methods that are basically doing the same thing,
but for consistency and also the ability to run the same code on different databases
you can use them:

```php 
Schema::disableForeignKeyConstraints();

// Run your migrations or seeder

Schema::enableForeignKeyConstraints();
```

Under the hood this is what is happening:

```php 
/**
 * Compile the command to enable foreign key constraints.
 *
 * @return string
 */
public function compileEnableForeignKeyConstraints()
{
    return 'SET FOREIGN_KEY_CHECKS=1;';
}

/**
 * Compile the command to disable foreign key constraints.
 *
 * @return string
 */
public function compileDisableForeignKeyConstraints()
{
    return 'SET FOREIGN_KEY_CHECKS=0;';
}
```

You can explore the MySQL grammar file here: `vendor/laravel/framework/src/Illuminate/Database/Schema/Grammars/MySqlGrammar.php`

### PostgreSQL

When working with PostgreSQL database, there are a few gotchas that you need to be aware of.
Let's start with exploring what is under the hood for the Laravel methods that enable/disable
the foreign key constraints.

```php 
/**
 * Compile the command to enable foreign key constraints.
 *
 * @return string
 */
public function compileEnableForeignKeyConstraints()
{
    return 'SET CONSTRAINTS ALL IMMEDIATE;';
}

/**
 * Compile the command to disable foreign key constraints.
 *
 * @return string
 */
public function compileDisableForeignKeyConstraints()
{
    return 'SET CONSTRAINTS ALL DEFERRED;';
}
```

What exactly are `IMMEDIATE` and `DEFERRED` constraints?
As per Postgres documentation:

SET CONSTRAINTS sets the behavior of constraint checking within the current transaction. IMMEDIATE constraints are checked at the end of each statement. DEFERRED constraints are not checked until transaction commit. Each constraint has its own IMMEDIATE or DEFERRED mode.

What is the issue with this, and why running the enable/disable methods will not work
out of the box?

By default, Laravel sets the constraints as `not deferrable`, which means that 
the commands will have no effect on your foreign key constraints.

```php 
/**
 * Compile a foreign key command.
 *
 * @param  \Illuminate\Database\Schema\Blueprint  $blueprint
 * @param  \Illuminate\Support\Fluent  $command
 * @return string
 */
public function compileForeign(Blueprint $blueprint, Fluent $command)
{
    $sql = parent::compileForeign($blueprint, $command);

    if (! is_null($command->deferrable)) {
        $sql .= $command->deferrable ? ' deferrable' : ' not deferrable';
    }

    if ($command->deferrable && ! is_null($command->initiallyImmediate)) {
        $sql .= $command->initiallyImmediate ? ' initially immediate' : ' initially deferred';
    }

    if (! is_null($command->notValid)) {
        $sql .= ' not valid';
    }

    return $sql;
}
```

To fix this issue, we need to make the foreign keys in the migrations `deferrable`.

```php 
Schema::table('posts', function (Blueprint $table) {
    $table->unsignedBigInteger('user_id');
    
    $table->foreign('user_id')
        ->deferrable()
        ->references('id')
        ->on('users');
});

// or

Schema::table('posts', function (Blueprint $table) {
    $table->foreignId('user_id')->deferrable()->constrained();
});
```

After setting the constraints to be deferrable, we are ready for the next step.

If we look inside the Postgres documentation for the command `SET CONSTRAINTS`, it says:

This command only alters the behavior of constraints within the current transaction. Issuing this outside of a transaction block emits a warning and otherwise has no effect.

So, this is telling us that even we made the foreign key constraint `deferrable` 
it will still have no effect unless we wrap everything in a database transaction.

It is a good thing that this is very easy to do in Laravel.

```php 
DB::beginTransaction();

Schema::disableForeignKeyConstraints();

// Run your migrations or seeder

DB::commit();

Schema::enableForeignKeyConstraints();
```

You can explore the PostgreSQL grammar file here: `vendor/laravel/framework/src/Illuminate/Database/Schema/Grammars/PostgresGrammar.php`

### SQLite

In SQLite foreign key constraints are disabled by default. 

You should enable them, before setting foreign key constraints in the migrations.

Luckily, in the database config file `config/database.php`, Laravel has it set to be enabled
by default, if the env constant `DB_FOREIGN_KEYS` is not set.

```php
'sqlite' => [
    'driver' => 'sqlite',
    'url' => env('DATABASE_URL'),
    'database' => env('DB_DATABASE', database_path('database.sqlite')),
    'prefix' => '',
    'foreign_key_constraints' => env('DB_FOREIGN_KEYS', true),
],
```

Under the hood this is what is happening in the grammar file:

```php
/**
 * Compile the command to enable foreign key constraints.
 *
 * @return string
 */
public function compileEnableForeignKeyConstraints()
{
    return 'PRAGMA foreign_keys = ON;';
}

/**
 * Compile the command to disable foreign key constraints.
 *
 * @return string
 */
public function compileDisableForeignKeyConstraints()
{
    return 'PRAGMA foreign_keys = OFF;';
}
```

Personally, I have used SQLite only when I run tests, 
and so far I have not had any issues with foreign key constraints.

You can explore the SQLite grammar file here: `vendor/laravel/framework/src/Illuminate/Database/Schema/Grammars/SQLiteGrammar.php`

### Dropping foreign keys

To drop a foreign key, you can use the `dropForeign` method and as an argument 
you need to pass the name of the foreign key constraint. The name is based on the
name of the table, and the columns in the constraint followed by the `_foreign` suffix.

```php 
$table->dropForeign('posts_user_id_foreign');
```

You can also use a simple way, where you can just pass the name of the foreign key in an array,

```php
$table->dropForeign(['user_id']);
```

### Cascade

In the SQL 2003 standard there are 5 referential actions:

* CASCADE
* RESTRICT
* NO ACTION
* SET NULL
* SET DEFAULT

We will take a look at the `CASCADE` operation.

As per `MySQL` documentation:

When an UPDATE or DELETE operation affects a key value in the parent table that has matching rows in the child table, the result depends on the referential action specified by ON UPDATE and ON DELETE subclauses of the FOREIGN KEY clause.

`CASCADE`: Delete or update the row from the parent table and automatically delete or update the matching rows in the child table. Both ON DELETE CASCADE and ON UPDATE CASCADE are supported. Between two tables, do not define several ON UPDATE CASCADE clauses that act on the same column in the parent table or in the child table.

* `ON DELETE CASCADE` means that if the parent record is deleted, the child records are deleted as well.
* `ON UPDATE CASCADE` means that if a parent primary key is updated, the child records are updated as well.
* `ON UPDATE CASCADE ON DELETE CASCADE` means that if the parent is updated or deleted, the changes are cascaded to the child records.

In Laravel, we can apply the `CASCADE` operation like this:

```php
$table->foreign('user_id')
    ->references('id')
    ->on('users')
    ->onUpdate('cascade')
    ->onDelete('cascade');

// or

$table->foreignId('user_id')
    ->constrained()
    ->onUpdate('cascade')
    ->onDelete('cascade');
```

In simple words, if for an example you delete a `user` row in your `users` table, 
all the related `posts` records that are referencing that `user_id` will also be 
deleted, if we use the `onDelete()` method with `cascade` argument.

One thing to watch for, is that when using soft deletes (if you set the `SoftDeletes` trait on your model), 
no relation records will be deleted when using the `onDelete()` method with `cascade` argument.

### Conclusion

I think we have covered a small part about what are foreign key constraints, 
what are they used for and how to disable them when we need to perform some "illegal" operations.

In my opinion, foreign keys are needed to maintain the integrity and consistency 
of your data, and are one of the key points when using relational databases.

Do you know other pros and cons from using foreign keys? 
Maybe some other tips and tricks?


Hit me in the comments bellow :)
