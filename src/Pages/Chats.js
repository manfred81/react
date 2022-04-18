import ChatList from '../components/ChatList';
import ControlPanel from '../components/ControlPanel';
import MessageList from '../components/MessageList';



const Chats = () => {
    return (
    <div className="wrapper">
    <ChatList />
    <div className="messengerPlace">
    <MessageList />
    <ControlPanel />
    </div>
     
</div>
    ); 
};

export default Chats;