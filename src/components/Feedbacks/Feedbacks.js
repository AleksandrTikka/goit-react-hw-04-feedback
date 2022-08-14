import React from 'react';
import PropTypes from 'prop-types';
import Section from 'components/Section';
import FeedbackOptions from 'components/FeedbackOptions';
import Statistics from 'components/Statistics';
import Notification from 'components/Notification';

// import { number } from 'prop-types';

class Feedbacks extends React.Component {
  static defaultProps = {
    initialGood: 0,
    initialNeutral: 0,
    initialBad: 0,
  };

  static propTypes = {
    initialGood: PropTypes.number.isRequired,
    initialNeutral: PropTypes.number.isRequired,
    initialBad: PropTypes.number.isRequired,
  };

  state = {
    good: this.props.initialGood,
    neutral: this.props.initialNeutral,
    bad: this.props.initialBad,
  };

  handleIncrementFeedback = feedback => {
    this.setState(prevState => ({
      [feedback]: prevState[feedback] + 1,
    }));
  };

  // handleIncrementGood = evt => {
  //   console.log('кликнул кнопку Гуд');
  //   console.log(evt);
  //   this.setState(prevState => {
  //     return {
  //       good: prevState.good + 1,
  //     };
  //   });
  // };
  // handleIncrementNeutral = () => {
  //   console.log('кликнул кнопку Нейтрал');
  //   this.setState(prevState => ({
  //     neutral: prevState.neutral + 1,
  //   }));
  // };
  // handleIncrementBad = () => {
  //   console.log('кликнул кнопку Бэд');
  //   this.setState(prevState => {
  //     return {
  //       bad: prevState.bad + 1,
  //     };
  //   });
  // };

  countTotalFeedback() {
    return Object.values(this.state).reduce(
      (prevValue, el) => prevValue + el,
      0
    );
  }

  countPositiveFeedbackPercentage() {
    return Math.round((100 * this.state.good) / this.countTotalFeedback());
  }

  render() {
    return (
      <>
        <Section title="Please leave feedback">
          <FeedbackOptions
            onLeaveFeedback={this.handleIncrementFeedback}
            options={this.state}
            // onIncrementGood={this.handleIncrementGood}
            // onIncrementNeutral={this.handleIncrementNeutral}
            // onIncrementBad={this.handleIncrementBad}
          />
        </Section>
        {this.countTotalFeedback() > 0 ? (
          <Section title="Statistics">
            <Statistics
              good={this.state.good}
              neutral={this.state.neutral}
              bad={this.state.bad}
              total={this.countTotalFeedback()}
              positivePercentage={this.countPositiveFeedbackPercentage()}
            />
          </Section>
        ) : (
          <Notification message="There is no feedback"></Notification>
        )}
      </>
    );
  }
}

export default Feedbacks;
