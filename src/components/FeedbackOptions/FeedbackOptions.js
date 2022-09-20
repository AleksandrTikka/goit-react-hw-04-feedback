import { List, Btn } from './FeedbackOption.styled';
import PropTypes, { objectOf } from 'prop-types';
const FeedbackOptions = ({ onLeaveFeedback, options }) => {
  return (
    <List>
      {options.map(option => (
        <li key={option}>
          <Btn type="button" onClick={() => onLeaveFeedback(option)}>
            {option.charAt(0).toUpperCase() + option.slice(1)}
          </Btn>
        </li>
      ))}
    </List>
  );
};

FeedbackOptions.propTypes = {
  options: objectOf(PropTypes.number).isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};

export default FeedbackOptions;
