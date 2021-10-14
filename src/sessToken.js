import { useState } from 'react';

export default function SessionToken() {

    const getToken = () => {
        const tokenString = sessionStorage.getItem('token');
        return tokenString
    };
    
    const [token, setToken] = useState(getToken());

    const saveToken = userToken => {
        console.log(userToken)
        sessionStorage.setItem('token', userToken.token);
        setToken(userToken.token);
    };


    return {
        setToken: saveToken,
        token,
    }
}