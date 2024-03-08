import { DateRange } from 'react-date-range'

const Calender = ({ value }) => {
  return (
    <DateRange
      ranges={[value]}
      rangeColors={['#F43F5E']}
      direction='vertical'
      showDateDisplay={false}

    />
  )
}

export default Calender;