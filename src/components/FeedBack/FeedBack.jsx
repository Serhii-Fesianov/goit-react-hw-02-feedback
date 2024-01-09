import React from 'react';

export class FeedBack extends React.Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
    total: 0,
  };

  HandleGoodClick = () => {
    this.setState({ good: this.state.good + 1 });
  };

  HandleNeutralClick = () => {
    this.setState({ neutral: this.state.neutral + 1 });
  };

  HandleBadClick = () => {
    this.setState({ bad: this.state.bad + 1 });
  };

  countTotalFeedback = () => {
    this.setState({
      total: this.state.good + this.state.neutral + this.state.bad,
    });
  };

  render() {
    return (
      <div>
        <h2>Please leave feddback</h2>
        <button
          type="button"
          onClick={() => {
            this.HandleGoodClick();
            this.countTotalFeedback();
          }}
        >
          Good
        </button>
        <button
          type="button"
          onClick={() => {
            this.HandleNeutralClick();
            this.countTotalFeedback();
          }}
        >
          Neutral
        </button>
        <button
          type="button"
          onClick={() => {
            this.HandleBadClick();
            this.countTotalFeedback();
          }}
        >
          Bad
        </button>
        <h2>Statistics</h2>
        <ul>
          <li>Good:{this.state.good}</li>
          <li>Neutral:{this.state.neutral}</li>
          <li>Bad:{this.state.bad}</li>
          <li>Total:{this.state.total}</li>
        </ul>
      </div>
    );
  }
}
