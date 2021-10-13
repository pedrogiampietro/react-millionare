import React from 'react';
import useSound from 'use-sound';
import Play from '../assets/sounds/play.mp3';
import Correct from '../assets/sounds/correct.mp3';
import Wrong from '../assets/sounds/wrong.mp3';

export function Trivia({ data, setStop, questionNumber, setQuestionNumber }) {
  const [question, setQuestion] = React.useState(null);
  const [selectedAnswer, setSelectedAnswer] = React.useState(null);
  const [className, setClassName] = React.useState('answer');
  const [letsPlay] = useSound(Play);
  const [correctAnswer] = useSound(Correct);
  const [wrongAnswer] = useSound(Wrong);

  React.useEffect(() => {
    setQuestion(data[questionNumber - 1]);
  }, [data, questionNumber]);

  function delay(duration, callback) {
    setTimeout(() => {
      callback();
    }, duration);
  }

  function handleClick(value) {
    setSelectedAnswer(value);
    setClassName('answer active');
    delay(3000, () =>
      setClassName(value.correct ? 'answer correct' : 'answer wrong')
    );
    delay(5000, () => {
      if (value.correct) {
        correctAnswer();
        delay(1000, () => {
          setQuestionNumber(prev => prev + 1);
          setSelectedAnswer(null);
        });
      } else {
        wrongAnswer();
        delay(1000, () => {
          setStop(true);
        });
      }
    });
  }

  return (
    <div className="trivia">
      <div className="question">{question?.question}</div>
      <div className="answers">
        {question?.answers.map(a => (
          <div
            className={selectedAnswer === a ? className : 'answer'}
            onClick={() => handleClick(a)}
          >
            {a.text}
          </div>
        ))}
      </div>
    </div>
  );
}
