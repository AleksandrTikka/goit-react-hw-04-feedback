import React from 'react';

class Feedbacks extends React.Component {
  handleIncrementGood = evt => {
    console.log('кликнул кнопку Гуд');
    console.log(evt);
  };
  handleIncrementNeutral = evt => {
    console.log('кликнул кнопку Нейтрал');
  };
  handleIncrementBad = evt => {
    console.log('кликнул кнопку Бэд');
  };

  render() {
    return (
      <>
        <section className="Feedbacks">
          <div className="Feedbacks__title">Please leave feedback</div>
          <div className="Feedback__controls">
            <button type="button" onClick={this.handleIncrementGood}>
              Good
            </button>
            <button type="button" onClick={this.handleIncrementNeutral}>
              Neutral
            </button>
            <button type="button" onClick={this.handleIncrementBad}>
              Bad
            </button>
          </div>
        </section>
        <section className="Statistics">
          <div>Statistics</div>
          <div>Good: </div>
          <div>Neutral: </div>
          <div>Bad: </div>
        </section>
      </>
    );
  }
}

export default Feedbacks;
