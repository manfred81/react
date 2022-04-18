import TextField from "@mui/material/TextField";
import { useTheme, Fab } from "@mui/material";
import { Send } from "@mui/icons-material";
import React, { useState, useRef, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addMessage } from "../store/messages/actions";


const ControlPanel = () => {
let {chatId} = useParams ();    
const [value, setValue] = useState('');
const theme = useTheme ();
const inputRef = useRef(null);
const dispatch = useDispatch();
const author = useSelector((state)=> state.profile.name);

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

//   useEffect (() => {
//       let timerId;
//       if ( messageList?.length > 0 && messageList[messageList.length - 1].author !== AUTHOR.bot){
//           timerId = setInterval(() => {
//               setMessageList([...messageList, newMessage]);
//           }, 1500);
//           const newMessage = { text: 'Привет друг', author: AUTHOR.bot};
//         }
//           return () => { 
//               if (timerId) {
//                   clearInterval(timerId);
//               }
//           };
//         }, [messageList]);
          


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
