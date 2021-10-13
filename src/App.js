import React from 'react';

import './assets/app.css';
import { Trivia } from './components/Trivia';
import { Timer } from './components/Timer';

export function App() {
  const [questionNumber, setQuestionNumber] = React.useState(1);
  const [stop, setStop] = React.useState(false);
  const [earned, setEarned] = React.useState('$ 0');

  const data = [
    {
      id: 1,
      question: 'Rolex is a company that specializes in what type of product?',
      answers: [
        {
          text: 'Phone',
          correct: false,
        },
        {
          text: 'Watches',
          correct: true,
        },
        {
          text: 'Food',
          correct: false,
        },
        {
          text: 'Cosmetic',
          correct: false,
        },
      ],
    },
    {
      id: 2,
      question: 'When did the website `Facebook` launch?',
      answers: [
        {
          text: '2004',
          correct: true,
        },
        {
          text: '2005',
          correct: false,
        },
        {
          text: '2006',
          correct: false,
        },
        {
          text: '2007',
          correct: false,
        },
      ],
    },
    {
      id: 3,
      question: 'Who played the character of harry potter in movie?',
      answers: [
        {
          text: 'Johnny Deep',
          correct: false,
        },
        {
          text: 'Leonardo Di Caprio',
          correct: false,
        },
        {
          text: 'Denzel Washington',
          correct: false,
        },
        {
          text: 'Daniel Red Cliff',
          correct: true,
        },
      ],
    },
  ];

  const moneyPyramid = React.useMemo(
    () =>
      [
        { id: 1, amount: 'R$ 100' },
        { id: 2, amount: 'R$ 200' },
        { id: 3, amount: 'R$ 300' },
        { id: 4, amount: 'R$ 400' },
        { id: 5, amount: 'R$ 500' },
        { id: 6, amount: 'R$ 600' },
        { id: 7, amount: 'R$ 700' },
        { id: 8, amount: 'R$ 800' },
        { id: 9, amount: 'R$ 900' },
        { id: 10, amount: 'R$ 1000' },
        { id: 11, amount: 'R$ 100000' },
      ].reverse(),
    []
  );

  React.useEffect(() => {
    questionNumber > 1 &&
      setEarned(moneyPyramid.find(m => m.id === questionNumber - 1).amount);
  }, [moneyPyramid, questionNumber]);

  return (
    <div className="app">
      <div className="main">
        {stop ? (
          <h1 className="endText">You earned: {earned}</h1>
        ) : (
          <>
            <div className="top">
              <div className="timer">
                <Timer setStop={setStop} questionNumber={questionNumber} />
              </div>
            </div>
            <div className="bottom">
              <Trivia
                data={data}
                setStop={setStop}
                questionNumber={questionNumber}
                setQuestionNumber={setQuestionNumber}
              />
            </div>
          </>
        )}
      </div>
      <div className="pyramid">
        <ul className="moneyList">
          {moneyPyramid.map(m => (
            <li
              className={
                questionNumber === m.id
                  ? 'moneyListItem active'
                  : 'moneyListItem'
              }
            >
              <span className="moneyListItemNumber">{m.id}</span>
              <span className="moneyListItemAmount">{m.amount}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
