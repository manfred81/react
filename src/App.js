import logo from './logo.svg';
import './App.css';
import Example from './Example';
import Message from './Message';

function App(props) { 

  const isRed = `App-header ${props.showRed ? 'header-red' : 'header-blu'}`;

  return (
      <div className={"App"}
      style ={{top: props.topPosition || '20px', position: 'relative'}}>
      <header 
      className= {isRed} >     
         Hello {props.name}  

      <Example/>
      <Message hello ={'bue'}/>
      </header>
    </div>
  );
}

export default App;
