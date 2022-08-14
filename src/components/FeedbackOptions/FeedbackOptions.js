const FeedbackOptions = ({ onLeaveFeedback, options }) => {
  return (
    <ul>
      {Object.keys(options).map(option => (
        <li key={option}>
          <button type="button" onClick={() => onLeaveFeedback(option)}>
            {option.charAt(0).toUpperCase() + option.slice(1)}
          </button>
        </li>
      ))}
    </ul>
  );
};

export default FeedbackOptions;
