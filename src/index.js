import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {createTheme, ThemeProvider} from "@mui/material"
import {orange} from  "@mui/material/colors"
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store';



const currentName = 'Ivan';

const theme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#023f7c',
      neMain: '#000000'

    }

  },
  status: {
    danger: orange[500],
  },
});

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
     <ThemeProvider theme={theme}>
      <BrowserRouter>
       <App name ={currentName} topPosition='5px'/>
     </BrowserRouter>  
    </ThemeProvider>
  </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);


