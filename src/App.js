
import './App.scss';
import { useEffect, useState } from 'react';

import { AUTHOR } from './constants/commom';



function App() { 
   const [massageList, setMassageList] = useState ([]);
   const [value, setValue] = useState('');
   const handleInput = (event) => {
    setValue(event.target.value);
  }
   const handleClick = () => {
    if (value !=='') {
      const newMassage = {text: value, author: AUTHOR.me}
      setMassageList([...massageList, newMassage]);
    }
   }
 
  useEffect( () => {
    let timerId;
     if (massageList.length > 0
       && massageList[massageList.length - 1].author !== AUTHOR.bot){
        timerId = setInterval (() => {
          setMassageList([...massageList, newMassage]);
        }, 1500);
        const newMassage = { text:'Спасибо,', author: AUTHOR.bot}   
     }
     return () => {
       if (timerId) {
        clearInterval(timerId);
       }
      
     }
    },[massageList]
  )

  return (
      <div className="App">
        <header className= 'App-header'> 
         <h4>Список сообщений: </h4>
         <br/>
      
        {massageList.map(element => (
        <div>
          <p>{element.text}</p>
          <sup>{element.author}</sup>
        </div>       
        ))} 
        <div>
          <input 
          placeholder={'введите сообщение'}
          value ={value}
           onChange={handleInput}></input>
          <button onClick={handleClick}>Add messange</button>
        </div>
      </header>
    </div>
  );
}

export default App;
