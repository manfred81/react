import TextField from "@mui/material/TextField";
import { useTheme, Fab } from "@mui/material";
import { Send } from "@mui/icons-material";
import React, { useState, useRef, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addMessage } from "../store/messages/actions";
import { AUTHOR } from "../constants/commom";



const ControlPanel = () => {
let {chatId} = useParams ();    
const [value, setValue] = useState('');
const theme = useTheme ();
const inputRef = useRef(null);
const dispatch = useDispatch();
const author = useSelector((state)=> state.profile.name);
const allMessages = useSelector((state)=> state.messages.messageList);

const messages = allMessages[chatId] || [];


  const handleInput = (event) => {
      setValue(event.target.value);
  };
  const handleClick = (e) => {

      e.preventDefault();
      if (value !== '') {
          const newMessage = { text: value, author: author };
          dispatch (addMessage(chatId, newMessage));
          setValue('');
          inputRef.current?.focus();
      
      }
  };

  useEffect(() => {
      inputRef.current?.focus();
  }, []);

  useEffect (() => {
      let timerId;
      if ( messages?.length > 0 && messages[messages.length - 1].author !== AUTHOR.bot
        ){
        const newMessage = { text: 'Привет друг', author: AUTHOR.bot};
          timerId = setInterval(() => {
              dispatch(addMessage(chatId, newMessage ));
          }, 1500);
          
        }
          return () => { 
              if (timerId) {
                  clearInterval(timerId);
              }
          };
        }, [messages, chatId]);
          


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
};

export default ControlPanel;
