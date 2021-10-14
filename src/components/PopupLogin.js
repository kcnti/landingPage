import PropTypes from 'prop-types';
import { Modal, Button, Alert } from 'react-bootstrap';
import React, { useState } from 'react';
import PopupReg from './PopupReg';

async function loginUser(credentials) {
    return fetch('https://api.kanti.pw/api/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(credentials)
    })
        .then(data => data.json())
}

function PopupLogin(props) {

    const { 
        show,
        onHide,
        username,
        password,
        setToken,
        setSessionName,
        setUsername,
        setPassword
    } = props;

    const [ logFail, setLogFail ]   = useState('');
    const [regShow, setRegShow]     = React.useState(false);

    const handleSubmit = async e => {
        e.preventDefault();
        // console.log(username, password)
        const token = await loginUser({
            username,
            password
        });
        // console.log("token "+ token)
        if (token.status === "Failed" || token.status === "Empty") {
            setLogFail("NO");
        } else {
            setToken(token);
            setSessionName(token);
            onHide();
            setLogFail("OK");
        }
    }


    return (
        <>
            <Modal
                show={show}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered
                animation={true}
            >
                <Modal.Header closeButton>
                    <Modal.Title id="contained-modal-title-vcenter">
                        LOGIN
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <label>Username</label>
                    <input
                        type="text"
                        name="username"
                        placeholder="Username"
                        onChange={e => setUsername(e.target.value)}
                    />
                    <label>Password</label>
                    <input
                        type="password"
                        name="password"
                        placeholder="Password"
                        onChange={e => setPassword(e.target.value)}
                    />
                </Modal.Body>
                <Modal.Footer>
                { logFail === '' ? <></> : logFail === "NO" ? <Alert variant="danger">Status: Failed</Alert> : <Alert variant="success">Status: Successfully</Alert>}
                    <Button variant="secondary" onClick={onHide}>Close</Button>
                    <Button variant="outline-primary" onClick={() => setRegShow(true)}>Register</Button>
                    <Button variant="primary" onClick={(e) => handleSubmit(e)}>Login</Button>
                </Modal.Footer>
            </Modal>
            <PopupReg
            show={regShow}
            onHideReg={() => {
                setRegShow(false)
                onHide()
            }}
            username={username}
            password={password}
            setToken={setToken}
            setSessionName={setSessionName}
            setUsername={setUsername}
            setPassword={setPassword}
            />
        </>
    );
}

export default PopupLogin;

PopupLogin.propTypes = {
    setToken: PropTypes.func.isRequired
}