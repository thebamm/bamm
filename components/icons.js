import cn from 'classnames'

const svgClass = (className) => cn(
  'svg-inline',
  className
)

export const IconClock = ({className}) => {
  return (
    <svg
      className={svgClass(className)}
      xmlns='http://www.w3.org/2000/svg'
      viewBox='0 0 256 256'
    >
      <path fill="none" d="M0 0h256v256H0z"/>
      <circle cx="128" cy="128" r="96" fill="none" stroke="currentColor" strokeMiterlimit="10" strokeWidth="16"/>
      <path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16" d="M128 72v56h56"/>
    </svg>
  )
}
