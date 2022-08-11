import React from 'react';
import PropTypes from 'prop-types';
import Controls from 'components/Controls/Controls';
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

  handleIncrementGood = evt => {
    console.log('кликнул кнопку Гуд');
    console.log(evt);
    this.setState(prevState => {
      return {
        good: prevState.good + 1,
      };
    });
  };
  handleIncrementNeutral = () => {
    console.log('кликнул кнопку Нейтрал');
    this.setState(prevState => ({
      neutral: prevState.neutral + 1,
    }));
  };
  handleIncrementBad = () => {
    console.log('кликнул кнопку Бэд');
    this.setState(prevState => {
      return {
        bad: prevState.bad + 1,
      };
    });
  };

  countTotalFeedbacks() {
    return Object.values(this.state).reduce(
      (prevValue, el) => prevValue + el,
      0
    );
  }

  countPersentPositive() {
    return Math.round((100 * this.state.good) / this.countTotalFeedbacks());
  }

  render() {
    return (
      <>
        <section className="Feedbacks">
          <div className="Feedbacks__title">Please leave feedback</div>

          <Controls
            onIncrementGood={this.handleIncrementGood}
            onIncrementNeutral={this.handleIncrementNeutral}
            onIncrementBad={this.handleIncrementBad}
          />
        </section>
        <section className="Statistics">
          <div>Statistics</div>
          <div>Good: {this.state.good}</div>
          <div>Neutral: {this.state.neutral}</div>
          <div>Bad: {this.state.bad}</div>
          <div>Total: {this.countTotalFeedbacks()}</div>
          <div>Positive feedback: {this.countPersentPositive()}%</div>
        </section>
      </>
    );
  }
}

export default Feedbacks;
