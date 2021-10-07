import React from 'react';

export function Trivia({ data, setStop, questionNumber, setQuestionNumber }) {
  const [question, setQuestion] = React.useState(null);
  const [selectedAnswer, setSelectedAnswer] = React.useState(null);
  const [className, setClassName] = React.useState('answer');

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
    delay(6000, () => {
      if (value.correct) {
        setQuestionNumber(prev => prev + 1);
        setSelectedAnswer(null);
      } else {
        setStop(true);
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
