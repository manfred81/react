import { TextField, Button } from '@mui/material';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import firebaseConfig from '../services/firebaseConfig';
import { createUserWithEmailAndPassword, getAuth } from 'firebase/auth';
import { toast, ToastContainer } from 'react-toastify';

const Registration = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');


    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    };
    
    const handlrPasswordChange = (e) => {
        setPassword(e.target.value);
    };

    const onSubmit = async (e) => {
        e.preventDefault();
        try {
           const auth = getAuth(firebaseConfig);
           await createUserWithEmailAndPassword(auth, email, password);
           toast.success('Успех!!!', {
               position: toast.POSITION.TOP_RIGHT
           });
           setEmail('');
           setPassword('');
        } catch (e) {
            toast.error('Ошибка!', {
                position: toast.POSITION.TOP_RIGHT
            });
          console.error(e);  
        }
    };

    return (
    <div>
        <ToastContainer />        
        <form onSubmit={onSubmit}>
        <h1>Регистрация</h1>
        <br/>
        <TextField
            placeholder="Введите email"
            name="email"
            type="email"
            onChange={handleEmailChange}
            value={email}
            required
        />
        <br/>
        <br/>
        <TextField
        placeholder = "Введите пароль"
        name="password"
        type="password"
        onChange= {handlrPasswordChange}
        value= {password}
        required
        />
        <br/>
        <br/>
        <div>
            {error && <p>{error}</p>}
            <Button variant='outlined' color='success' type='submit'>Зарегистрироваться</Button>
        </div>
        <p>
            Уже есть аккаунт?
            <br/>
            <br/>
             <Link style={{color: 'grey'}}  to="login">Войти</Link>
        </p>
        </form>
    </div>
    );
};


export default Registration;