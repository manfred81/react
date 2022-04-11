import ChatList from '../components/ChatList';
import ControlPanel from '../components/ControlPanel';
import MessageList from '../components/MessageList';



const Chats = ({ chats, addMessage }) => {
    return (
    <div className="wrapper">
    <ChatList chats={chats} />
     <MessageList chats={chats} />
     <ControlPanel addMessage={addMessage} />
</div>
    ); 
};

export default Chats;