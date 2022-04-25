import { Route, Routes, Link } from 'react-router-dom'
import Home from './Home';
import Profile from './Profile';
import Chats from './Chats';
import Gists from './Gists';


const Router = () => {

    return (
        <>
   
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
        <li>
            <Link to="/gists">Gists</Link>
        </li>    
        
    </ul>

    <Routes>
     <Route path="/" exact element = {<Home/>} />
     <Route path="/profile" element = {<Profile/>} />
     <Route path="/chats">
        <Route index element = {<Chats />} />
        <Route path=':chatId' element={<Chats />} />
     </Route >
     <Route path='*' element= {<Chats />} />
     <Route path="/gists" element = {<Gists/>} />
    </Routes>

    </>
    );
};

export default Router;