//import logo from './logo.svg';
import './App.css';
import Card from './components/UI/Card/Card';
import data from './Data/Data.js'
import Button from './components/UI/Button/Button';
import Banner from './components/UI/Banner/Banner'
import { useState } from 'react';

function App() {
  const [res, setRes] = useState(0);
  const [btns, setBtns] = useState(0);
  console.log(res);
  const [show, setShow] = useState(false);
  const [result, setResult] = useState('Show Results')
  const [start, setStart] = useState(false);
  
  function handleStart() {
    setStart(true);
    document.getElementById('toggle').style.display = 'none';
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1 className="title">Quizz App</h1>

        <button id='toggle' onClick={handleStart}>Start Quiz</button>

        {start && 
        <div className="gridcontainer">
        {data.map(item => {
          return <Card 
            key={item['id']}
            id={item['id']}
            question={item['question']}
            options={item['options']}
            answer={item['answer']}
            setRes={setRes}
            res={res}
            btns={btns}
            setBtns={setBtns}
            setStart={setStart}
          />
        })}
        </div>
        } 
      </header>
      {show && <Banner ans={res}/>}
      {btns === 5  &&
      <Button
        setShow={setShow}
        setResult={setResult}
        result={result}
        text={result}
        option='a'
        answer='b'
        setRes={setRes}
        setStart={setStart}
      />
      }
    </div>
  );
}

export default App;
