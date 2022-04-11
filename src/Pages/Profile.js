import { useCallback } from 'react';
import store from '../store';
import { changeVisible } from '../store/profile/actions';


const Profile = () => {

    const { showName, name } = store.getState();
    const dispatch = store.dispatch;

    const setShowName = useCallback(() => {
        dispatch(changeVisible);
    }, [dispatch]);

    return (
    <div>
        <h1>Profile</h1>
        <button onClick={setShowName}>Show Name</button>
        <blockquote>{showName && <h3>{name}</h3>}</blockquote>
        </div>
        );
};

export default Profile;