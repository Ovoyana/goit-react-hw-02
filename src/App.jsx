import './App.css';
import Description from "./components/Description/Description";
import Options from "./components/Options/Options";
import Feedback from "./components/Feedback/Feedback";
import { useEffect, useState } from "react";
import Notification from "./components/Notification/Notification";

export default function App() {

  const [choice, setChoice] = useState(() => {

    const savedChoice = window.localStorage.getItem("saved-choice");

    if (savedChoice !== null) {

      return JSON.parse(savedChoice);

    } else {

      return {
        good: 0,
        neutral: 0,
        bad: 0,
      };
    }
  });

  useEffect(() => {
    window.localStorage.setItem("saved-choice", JSON.stringify(choice));
  }, [choice]);

  const totalFeedback = choice.good + choice.neutral + choice.bad;

  const positiveFeedback = Math.round((choice.good / totalFeedback) * 100);

  const updateFeedback = (vote) => {

    setChoice({
      ...choice,
      [vote]: choice[vote] + 1,
    });
  };

  const resetFeedback = () =>
    setChoice({
      good: 0,
      neutral: 0,
      bad: 0,
    });

  return (
    <>
      <Description />
      <Options
        clickHandler={(vote) => updateFeedback(vote)}
        total={totalFeedback}
        reset={resetFeedback}
        
      />
      {totalFeedback > 0 ? (
        <Feedback
          feedbackObj={choice}
          total={totalFeedback}
          positive={positiveFeedback}
        />
      ) : (
        <Notification />
      )}
    </>
  );
}
