import React, {useState} from 'react';
import './App.css';
import Divider from './images/pattern-divider-desktop.svg';
import Icon from './images/icon-dice.svg';
import axios from 'axios';


function App() {

  const [advice, setAdvice] = useState('You can have too much of a good thing.');
  const [adviceId, setAdviceId] = useState('92');

  const handleAdvice = async() => {
    try {
      const response = await axios.get('https://api.adviceslip.com/advice');
      setAdviceId(response.data.slip.id);
      setAdvice(response.data.slip.advice);

    } catch (error) {
      console.log(error);
    }
  }


  return (
    <main className="App">
    
    <article className='card'>

    <h6>Advice{` #${adviceId}`}</h6>
  
    {advice.length > 0 && (
      <h2>{`"${advice}"`}</h2>
    )}

    <img src={Divider} alt="Divider" className='divider'/>
   
   <button type='button' onClick={handleAdvice} className='btn'>
    <img src={Icon} alt="Icon" />
   </button>
    </article>
    </main>
  );
}

export default App;
