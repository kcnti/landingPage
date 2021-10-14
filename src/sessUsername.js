import { useState } from 'react';

export default function SessionUsername() {
    
    const getUsername = () => {
        const user = sessionStorage.getItem('username');
        return user
    }

    const [username, setUsername] = useState(getUsername());

    const saveUsername = userUsername => {
        sessionStorage.setItem('username', userUsername.username);
        setUsername(userUsername.username);
    };


    return {
        setSessionName: saveUsername,
        username
    }
}