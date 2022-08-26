// import Notification from 'components/Notification/Notification';
import { List, Item } from './Statistics.styled';
import PropTypes from 'prop-types';
const Statistics = ({ good, neutral, bad, total, positivePercentage }) => {
  return (
    <List>
      <Item>Good: {good}</Item>
      <Item>Neutral: {neutral}</Item>
      <Item>Bad: {bad}</Item>
      <Item>Total: {total}</Item>
      <Item>Positive feedback: {positivePercentage} %</Item>
    </List>
  );
};

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number,
  positivePercentage: PropTypes.number,
};

export default Statistics;
