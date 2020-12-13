import { parseISO, format } from 'date-fns'
import cn from 'classnames'
import { IconClock } from './icons'

export default function DateFormatter({ dateString, className }) {
  const date = parseISO(dateString)
  const timeClassNames = cn(className)

  return <time dateTime={dateString} className={timeClassNames}><IconClock className='mr-2'/>{format(date, 'LLLL	d, yyyy')}</time>
}
