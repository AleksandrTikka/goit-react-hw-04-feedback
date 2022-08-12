// import Notification from 'components/Notification/Notification';
const Statistics = ({ good, neutral, bad, total, positivePercentage }) => {
  return (
    <div>
      <div>Good: {good}</div>
      <div>Neutral: {neutral}</div>
      <div>Bad: {bad}</div>
      <div>Total: {total}</div>
      <div>Positive feedback: {positivePercentage} %</div>
    </div>
  );
};
export default Statistics;
