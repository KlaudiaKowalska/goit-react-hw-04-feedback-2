import React, { useState } from "react";
import styles from "./FeedbackWidget.module.scss";

const FeedbackWidget = () => {
  const [state, setState] = useState({ good: 0, neutral: 0, bad: 0 });

  const handleFeedback = (type) => {
    setState((prevState) => ({
      ...prevState,
      [type]: prevState[type] + 1,
    }));
  };

  const countTotalFeedback = () => {
    return state.good + state.neutral + state.bad;
  };
  const countPositiveFeedbackPercentage = () => {
    const total = countTotalFeedback();
    return total === 0 ? 0 : Math.round((state.good / total) * 100);
  };

  return (
    <div className={styles.feedbackWidget}>
      <h1>Please leave feedback</h1>
      <div className={styles.buttonContainer}>
        <button onClick={() => handleFeedback("good")}>Good</button>
        <button onClick={() => handleFeedback("neutral")}>Neutral</button>
        <button onClick={() => handleFeedback("bad")}>Bad</button>
      </div>
      <h2>Statistics</h2>
      <div className={styles.statistics}>
        <p>Good: {state.good}</p>
        <p>Neutral: {state.neutral}</p>
        <p>Bad: {state.bad}</p>
        <p>Total: {countTotalFeedback()}</p>
        <p>Positive Feedback: {countPositiveFeedbackPercentage()}%</p>
      </div>
    </div>
  );
};

export default FeedbackWidget;
