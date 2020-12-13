import cn from 'classnames'

export default function Container({ children, className }) {
  const containerClassNames = cn(
    'container mx-auto px-4 sm:px-6 lg:px-8',
    className
  )

  return <div className={containerClassNames}>{children}</div>
}
