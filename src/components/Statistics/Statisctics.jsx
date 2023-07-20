import { Response } from 'components/Reviews.styled';
import PropTypes from 'prop-types';

export const Statistics = ({ good, neutral, bad, total,positivePercentage }) => (
 <ul>
      <Response>Good: {good}</Response>
      <Response>Neutral: {neutral}</Response>
      <Response>Bad: {bad}</Response>
      <Response>Title: {total}</Response>
     <Response>Positive Response: {positivePercentage} %</Response> 
    </ul>
  );

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
positivePercentage: PropTypes.number.isRequired,
}