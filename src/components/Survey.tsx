import React from "react";
import Button from "@mui/material/Button";

import Gauge from "./Gauge";
import QUESTIONS from "../constants/Questions";

interface SurveyProps {
  gauge: number;
  onComplete(): void;
  setGauge(gauge: number): void;
}

export default function Survey({ gauge, onComplete, setGauge }: SurveyProps) {
  const [questionIndex, setQuestionIndex] = React.useState(0);

  const question = QUESTIONS[questionIndex];
  const numQuestions = QUESTIONS.length;

  function handleAnswer(answer: boolean): void {
    const isCorrect = answer === question.answer;
    if (isCorrect) {
      setGauge(gauge + 1 / numQuestions);
    }

    const newIndex = questionIndex + 1;
    if (newIndex === numQuestions) {
      onComplete();
    } else {
      setQuestionIndex(questionIndex + 1);
    }
  }

  return (
    <React.Fragment>
      <Gauge gauge={gauge} />
      <h3>{question.question}</h3>

      <div style={{ display: "flex" }}>
        <Button
          onClick={() => handleAnswer(true)}
          sx={{ marginRight: 2 }}
          variant="outlined"
        >
          Ja
        </Button>
        <Button onClick={() => handleAnswer(false)} variant="outlined">
          Nej
        </Button>
      </div>
    </React.Fragment>
  );
}
