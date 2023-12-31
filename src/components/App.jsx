import React, { useState } from 'react'

import { Section } from './Section/Section';
import { FeedbackOption } from './FeedbackOptions/FeedbackOptions';
import { Statistics } from './Statistics/Statisctics';
import { Notification } from './Notification/Notification';

const App = () => {
const [good, setGood] = useState(0)
const [neutral, setNeutral] = useState(0)
const [bad, setBad] = useState(0)


const handleFeedback = e => {
      if (e === 'Good') {
        setGood(good + 1)
      } else if (e === 'Neutral') {
        setNeutral(neutral + 1);
      } else if (e === 'Bad') {
        setBad(bad + 1) 
      }
    };
  
    const countTotalFeedback = () => {
      
      return good + neutral + bad;
    };
   
    const countPositiveFeedbackPercentage = () => {
      return Math.round((good /countTotalFeedback()) * 100);
    };
return (
        <
      >
          <Section title="Please leave feedback">
            <FeedbackOption
              options={['Good', 'Neutral', 'Bad']}
              handleFeedback={handleFeedback}
            />
          </Section>
  
  
          <Section title='Statistics'>
            {countTotalFeedback() !== 0 ? (
              <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={countTotalFeedback()}
              positivePercentage={countPositiveFeedbackPercentage()}
            />
            ) : (
            <Notification message="There is no feedback"></Notification>
            )}
            
  </Section>
  </>
      );
}

export default App;


