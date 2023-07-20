import { Component } from 'react';
import { Section } from './Section/Section';
import { FeedbackOption } from './FeedbackOptions/FeedbackOptions';
import { Statistics } from './Statistics/Statisctics';
import { Notification } from './Notification/Notification';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };
  handleFeedback = e => {
    if (e === 'Good') {
      this.setState({ good: this.state.good + 1 });
    } else if (e === 'Netural') {
      this.setState({ neutral: this.state.neutral + 1 });
    } else if (e === 'Bad') {
      this.setState({ bad: this.state.bad + 1 });
    }
  };

  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    return good + neutral + bad;
  };

  countPositiveFeedbackPercentage = () => {
    const { good } = this.state;
    return Math.round((good / this.countTotalFeedback()) * 100);
  };

  render() {
    return (
      <
    >
        <Section title="Please leave feedback">
          <FeedbackOption
            options={['Good', 'Netural', 'Bad']}
            handleFeedback={this.handleFeedback}
          />
        </Section>


        <Section title='Statistics'>
          {this.countTotalFeedback() !== 0 ? (
            <Statistics
            good={this.state.good}
            neutral={this.state.neutral}
            bad={this.state.bad}
            total={this.countTotalFeedback()}
            positivePercentage={this.countPositiveFeedbackPercentage()}
          />
          ) : (
          <Notification message="There is no feedback"></Notification>
          )}
          
</Section>
</>
    );
  }
}
