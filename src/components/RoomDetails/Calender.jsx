import { DateRange } from 'react-date-range'
import PropTypes from 'prop-types';
const Calender = ({ value }) => {
  return (
    <DateRange
      ranges={[value]}
      rangeColors={['#F43F5E']}
      direction='vertical'
      showDateDisplay={false}
      onChange={() =>console.log()}
      

    />
  )
}
Calender.propTypes={
  value:PropTypes.object
}
export default Calender;