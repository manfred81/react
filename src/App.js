import './App.scss';
import Router from './pages/Router';
import React, {useState} from 'react';

export const MyThemeContext = React.createContext({ theme: 'dark'});

function App() { 
  const [theme, setTheme] = useState('dark')
    return (
      <div className="App">
        <header className= "App-header">
        <MyThemeContext.Provider value={{theme: theme, setTheme: setTheme }}>
          <Router/>
        </MyThemeContext.Provider>   
      </header>    
    </div>
  );
}

export default App;
