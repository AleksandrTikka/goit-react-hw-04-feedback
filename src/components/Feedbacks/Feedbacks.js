import { useState } from 'react';
// import PropTypes from 'prop-types';

import { Box } from './Feedbacks.styled';
import Section from 'components/Section';
import FeedbackOptions from 'components/FeedbackOptions';
import Statistics from 'components/Statistics';
import Notification from 'components/Notification';

// import { number } from 'prop-types';

function Feedbacks() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const feedback = [good, neutral, bad];

  // const handleIncrementGood = () => {
  //   setGood(prevState => prevState + 1);
  // };
  // const handleIncrementNeutral = () => {
  //   setNeutral(prevState => prevState + 1);
  // };
  // const handleIncrementBad = () => {
  //   setBad(prevState => prevState + 1);
  // };

  const countTotalFeedback = () => {
    return feedback.reduce((prevValue, el) => prevValue + el, 0);
  };

  const handleIncrementFeedback = type => {
    switch (type) {
      case 'good':
        setGood(prevState => prevState + 1);
        break;
      case 'neutral':
        setNeutral(prevState => prevState + 1);
        break;
      case 'bad':
        setBad(prevState => prevState + 1);
        break;
      default:
        throw new Error(`Unknown feedback type - ${type}`);
    }
  };
  const countPositiveFeedbackPercentage = () => {
    return Math.round((100 * good) / countTotalFeedback());
  };

  return (
    <Box>
      <Section title="Please leave feedback">
        <FeedbackOptions
          onLeaveFeedback={handleIncrementFeedback}
          options={['good', 'neutral', 'bad']}
        />
      </Section>

      <Section title="Statistics">
        {countTotalFeedback() > 0 ? (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={countTotalFeedback()}
            positivePercentage={countPositiveFeedbackPercentage()}
          />
        ) : (
          <Notification message="There is no feedback" />
        )}
      </Section>
    </Box>
  );
}

export default Feedbacks;
