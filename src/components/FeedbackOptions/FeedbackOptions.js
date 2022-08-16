import { List } from './FeedbackOption.styled';
const FeedbackOptions = ({ onLeaveFeedback, options }) => {
  return (
    <List>
      {Object.keys(options).map(option => (
        <li key={option}>
          <button type="button" onClick={() => onLeaveFeedback(option)}>
            {option.charAt(0).toUpperCase() + option.slice(1)}
          </button>
        </li>
      ))}
    </List>
  );
};

export default FeedbackOptions;
