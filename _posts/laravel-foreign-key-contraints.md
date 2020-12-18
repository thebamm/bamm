---
title: 'Laravel foreign key constraints'
excerpt: 'A FOREIGN KEY is a key that is used to establish and enforce a link
between 2 database tables. '
coverImage: '/assets/blog/laravel-foreign-key-constraints-cover.jpeg'
date: '2020-12-18T05:35:07.322Z'
author:
  name: Bojan Petkovski
ogImage:
  url: '/assets/blog/laravel-foreign-key-constraints-cover.jpeg'
---

A FOREIGN KEY is a key that is used to establish and enforce a link
between 2 database tables. 
The FOREIGN KEY represents a column, or a combination of columns used
to identify the relationship between the `child` table that stores the
FOREIGN KEY and the `parent` or `referent` table that is referenced 
by its PRIMARY KEY. Basically, FOREIGN KEY constraints enforce referential integrity.

> <a href="https://en.wikipedia.org/wiki/Referential_integrity" target="_blank" rel="noopener">Referential integrity</a> 
> is a property of data stating that all its 
> references are valid. In the context of relational databases, 
> it requires that if a value of one attribute (column) of a 
> relation (table) references a value of another attribute 
> (either in the same or a different relation), then the referenced value must exist.

Let's start with a simple example how we can achieve this in a Laravel application.

We will define a `user_id` column on the `posts` table that references the `id` column on a `users` table:

```php[class="line-numbers"]
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

Schema::table('posts', function (Blueprint $table) {
    $table->unsignedBigInteger('user_id');

    $table->foreign('user_id')->references('id')->on('users');
});
```
