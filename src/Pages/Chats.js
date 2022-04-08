import { useState } from 'react';
import { useParams } from 'react-router-dom';
import MessageList from '../components/MessageList';
import ChatList from '../components/ChatList';
import { AUTHOR } from '../constants/commom';



const initialChats = {
  id1: {
      name: 'chat 1',
      messages: [
          {text: 'Message 1', author: AUTHOR.bot},
          {text: 'Hi', author: AUTHOR.me}
      ]
  },
  id2: {
    name: 'chat 2',
    messages: [{text: 'Message from chat 2', author: AUTHOR.me}]
  }
};

const Chats = () => {
    let { chatId } = useParams ();
    const [chats] = useState(initialChats);
    if (!chats[chatId]) return null;

   
    return <div className='wrapper'>
   <ChatList chats ={chats}/>     
   <MessageList messages= {chats[chatId].messages}/>


</div>
   
};

export default Chats;