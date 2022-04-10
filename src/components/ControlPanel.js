import '..App/';
import { useTheme, Fab } from "@mui/material";
import { Send } from "@mui/icons-material";
import React, { useEffect, useState, useState} from "react";
import { AUTHOR } from "../constants/commom";
import { TextField } from "@mui/material/TextField";
import { Fab } from "@mui/material";






const ControlPanel = () => {
const [messageList, setMessageList] = useState ([]);
const [value, setValue] = useState('');
const theme = useTheme ();
const inputRef = useRef(null);

  const handleInput = (event) => {
      setValue(event.target.value);
  };
  const handleClick = (e) => {

      e.preventDefault();
      if (value !== '') {
          const newMessage = {text: value, author: AUTHOR.me};
          setMessageList([...(messageList || []), newMessage]);
          setValue('');
          inputRef.current?.focus();
      
      }
  };

  useEffect(() => {
      inputRef.current?.focus();
  }, [])
  useEffect (() => {
      let timerId;
      if ( messageList?.length > 0 && messageList[messageList.length - 1].author !== AUTHOR.bot){
          timerId = setInterval(() => {
              setMessageList([...messageList, newMessage]);
          }, 1500);
          const newMessage = { text: 'Привет друг', author: AUTHOR.bot};
        }
          return () => { 
              if (timerId) {
                  clearInterval(timerId);
              }
          };
        }, [messageList]);
          


    return (
    <div>
        <div className= {'controlPanel'}>
  <TextField 
      inputRef={inputRef}
      placeholder={'введите что-то'}
      value ={value}
      onChange={handleInput}
      />

   <Fab 
     style={{
       backgroundColor: theme.palette.primary.main
       }}
       onClick={handleClick}
        color="primary" 
        aria-label="add">
     <Send />
   </Fab>
 </div>
</div>
);
}
export default ControlPanel;
