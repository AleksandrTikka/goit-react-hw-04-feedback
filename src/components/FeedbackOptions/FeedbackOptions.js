import { List, Btn } from './FeedbackOption.styled';
const FeedbackOptions = ({ onLeaveFeedback, options }) => {
  return (
    <List>
      {Object.keys(options).map(option => (
        <li key={option}>
          <Btn type="button" onClick={() => onLeaveFeedback(option)}>
            {option.charAt(0).toUpperCase() + option.slice(1)}
          </Btn>
        </li>
      ))}
    </List>
  );
};

export default FeedbackOptions;
