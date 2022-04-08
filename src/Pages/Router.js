import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import Home from "./Home";
import Profile from "./Profile";
import Chats from "./Chats";
import { AUTHOR } from "../constants/commom";

const initialChats = {
    id1:{
        name: 'chat 1',
        massages: [{text: 'Message 1', author: AUTHOR.bot}, {text: 'Hi', author: AUTHOR.me}]
    },
    id2:{
        name: 'chat 2',
        massages: [{text: 'Message from chat 2', author: AUTHOR.me}]
    }
}

const Router = () => {
    return (
    <BrowserRouter>
    
    <ul className={'menu'}>
        <li>
            <Link to="/">Home</Link>
        </li>
        <li>
            <Link to="/profile">Profile</Link>
        </li>
        <li>
            <Link to="/chats">Chats</Link>
            
        </li>
    </ul>

    <Routes>
     <Route path="/" exact element = {<Home/>} />
     <Route path="/profile" element = {<Profile/>} />
     <Route path="/chats/:chatId" element = {<Chats />} />

    </Routes>
    </BrowserRouter>
    );
};

export default Router;