import { parseISO, format } from 'date-fns'
import cn from 'classnames'

export default function DateFormatter({ dateString, className }) {
  const date = parseISO(dateString)
  const timeClassNames = cn(className)

  return <time dateTime={dateString} className={timeClassNames}>{format(date, 'LLLL	d, yyyy')}</time>
}
