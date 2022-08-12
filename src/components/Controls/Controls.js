const FeedbackOptions = ({
  onIncrementGood,
  onIncrementNeutral,
  onIncrementBad,
}) => {
  return (
    <div className="Feedback__controls">
      <button type="button" onClick={onIncrementGood}>
        Good
      </button>
      <button type="button" onClick={onIncrementNeutral}>
        Neutral
      </button>
      <button type="button" onClick={onIncrementBad}>
        Bad
      </button>
    </div>
  );
};

export default FeedbackOptions;
