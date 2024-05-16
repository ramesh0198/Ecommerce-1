import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

export default function Register() {
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const navigate = useNavigate();

    const RegisterUser = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:3000/api/v1/user/register', {
                email: email,
                password: password,
                username: username
            });
            console.log(response.data); // Adjust to response.data for actual response data
            navigate('/login');
        } catch (error) {
            if (error.response) {
                // The request was made and the server responded with a status code
                // that falls out of the range of 2xx
                console.error('Error data:', error.response.data);
                console.error('Error status:', error.response.status);
                console.error('Error headers:', error.response.headers);
            } else if (error.request) {
                // The request was made but no response was received
                console.error('Error request:', error.request);
            } else {
                // Something happened in setting up the request that triggered an Error
                console.error('Error message:', error.message);
            }
        }
    }

    return (
        <div className='container'>
            <form className='form'>
                <h3 className='headingtag2'>REGISTER</h3>
                <label>Username :</label>
                <input type="text" placeholder='Your Name' onChange={(e) => setUsername(e.target.value)} />
                <br />
                <label>Email :</label>
                <input type="text" placeholder='Email' onChange={(e) => setEmail(e.target.value)} />
                <br />
                <label>Password :</label>
                <input type="password" placeholder='#####' onChange={(e) => setPassword(e.target.value)} />
                <br />
                <button className="button" onClick={RegisterUser} type='submit'>Sign in</button>
            </form>
        </div>
    );
}
