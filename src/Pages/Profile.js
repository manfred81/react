import { Checkbox } from '@mui/material';
import { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { changeVisible } from '../store/profile/actions';


const Profile = () => {
    const { showName, name } = useSelector((state) => state);
    const dispatch = useDispatch();
    const setShowName = useCallback(() => {
        dispatch(changeVisible);
    }, [dispatch]);
    

    return (
     <div className= 'profilStyle'>
        <h1>Profile</h1>
        <button onClick={setShowName}>Show Name</button>
        <blockquote style={{height: '40px'}}>{showName && <h3>{name}</h3>}</blockquote>      
     </div>
        );
};

export default Profile;
