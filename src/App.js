import React from 'react';
import { useState } from 'react';
import '/home/dev/Desktop/from/src/component/Buttons/Button.scss';
import './App.css';
import Form from './component/Form/Form';
import QuestionOne from './component/Pages.js';
import { QuestionTwo, QuestionThree, LastPage } from './component/Pages.js';
import  InfoContext from './component/InfoContext';
import  {InfoContextProvider} from './component/InfoContext';
import useForm from './component/useForm'


function App() {
  const array = [0, 1, 2, 3, 4]

  const [index, setIndex] = useState(0)
  return (
    <div className="App">
      <InfoContextProvider >
      <div className="container">
        <div className="progress">
          <strong>PROGRESS {index}/4</strong>
          <div className="progress-bar" style=
            {
              index === 0 ? { width: '0%' } :
                index === 1 ? { width: '25%', padding: 10 } :
                  index === 2 ? { width: '50%', padding: 10 } :
                    index === 3 ? { width: '75%', padding: 10 } : { width: '100%', padding: 10 }
            }>
          </div>
        </div>
        {
          index === 0 ? < Form /> :
            index === 1 ? <QuestionOne /> :
              index === 2 ? <QuestionTwo /> :
                index === 3 ? <QuestionThree /> : <LastPage />
        }

        <div className="button">
          <input type="button" id="back" className="button" value="Backwards" onClick={() => index <= 0 ? 0 : setIndex(index - 1)} disabled={index === 0 ? true : false} />
          <input type="button" id="for" className="button" value="Forward" onClick={() => index >= 5 ? 4 : setIndex(index + 1)} disabled={index === 4 ? true : false} />
        </div></div></InfoContextProvider>
    </div>
  );
}

export default App;
