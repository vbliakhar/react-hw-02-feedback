import React from 'react';
import FeedbackOptions from './components/FeedbackOptions/FeedbackOptions';
import './App.scss';
import Statistics from './components/Statistics/Statistics';
import Section from './components/Section/Section';
import Notification from './components/Notification/Notification';
class App extends React.Component {
  state = { good: 0, neutral: 0, bad: 0 };
  countFeedback = event => {
    this.setState(prevState => {
      return {
        [event.target.name]: prevState[event.target.name] + 1,
      };
    });
  };
  countTotalFeedback() {
    return this.state.good + this.state.neutral + this.state.bad;
  }
  countPositiveFeedbackPercentage() {
    return Math.floor((this.state.good / this.countTotalFeedback()) * 100);
  }
  render() {
    return (
      <div>
        <Section title="Please leave feedback">
          <FeedbackOptions options={this.countFeedback} onLeaveFeedback={''} />
        </Section>
        <Section title="Statistics">
          {this.countTotalFeedback() > 0 ? (
            <Statistics
              good={this.state.good}
              neutral={this.state.neutral}
              bad={this.state.bad}
              total={this.countTotalFeedback()}
              positivePercentage={this.countPositiveFeedbackPercentage()}
            />
          ) : (
            <Notification message="No feedback given" />
          )}
        </Section>
      </div>
    );
  }
}

export default App;
