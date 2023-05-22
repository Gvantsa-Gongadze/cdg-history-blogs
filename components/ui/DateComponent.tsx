import { formatDate } from '../../lib/utils'

const DateComponent = ({ dateString, options, ...rest }: any): any => {
  return [
    <time dateTime={dateString} {...rest} key={dateString}>
      {formatDate(dateString, options)}
    </time>
  ]
}

export default DateComponent
