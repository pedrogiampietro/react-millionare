import React from 'react';

import './assets/app.css';

export function App() {
  const [questionNumber, setQuestionNumber] = React.useState(1);

  const moneyPyramid = [
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
  ].reverse();

  return (
    <div className="app">
      <div className="main">
        <div className="top">
          <div className="timer">30</div>
        </div>
        <div className="bottom">question and answers</div>
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
