import React from 'react';

export function Trivia({
  data,
  setTimeOut,
  questionNumber,
  setQuestionNumber,
}) {
  const [question, setQuestion] = React.useState(null);
  const [selectedAnswer, setSelectedAnswer] = React.useState(null);
  const [className, setClassName] = React.useState('answer');

  React.useEffect(() => {
    setQuestion(data[questionNumber - 1]);
  }, [data, questionNumber]);

  function handleClick(value) {
    setSelectedAnswer(value);
    setClassName('answer active');
    setTimeout(() => {
      setClassName(value.correct ? 'answer correct' : 'answer wrong');
    }, 3000);
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
