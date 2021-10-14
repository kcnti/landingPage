import PropTypes from 'prop-types';
import { Modal, Button, Alert } from 'react-bootstrap';
import React, { useState } from 'react';

async function registerUser(credentials) {
    return fetch('https://api.kanti.pw/api/register', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(credentials)
    })
        .then(data => data.json())
}

function PopupReg(props) {

    const { 
        show,
        onHideReg,
        username,
        password,
        setToken,
        setSessionName,
        setUsername,
        setPassword
    } = props;

    const [ regFail, setRegFail ]                   = useState('');
    const [ ConfirmPassword, setConfirmPassword ]   = useState();

    const handleSubmit = async e => {
        e.preventDefault();
        const token = await registerUser({
            username,
            password,
        });
        if (token.status === "Success") {
            setToken(token);
            setSessionName(token);
            onHideReg();
            setRegFail("OK");
        } else {
            setRegFail("NO");
        }
    }


    return (
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
                        value={username}
                        onChange={e => setUsername(e.target.value)}
                    />
                    <label>Password</label>
                    <input
                        type="password"
                        name="password"
                        placeholder="Password"
                        value={password}
                        onChange={e => setPassword(e.target.value)}
                    />
                    <label>Confirm Password</label>
                    <input
                        type="password"
                        name="confirm_password"
                        placeholder="Confirm Password"
                        onChange={e => setConfirmPassword(e.target.value)}
                    />
                </Modal.Body>
                <Modal.Footer>
                    { ConfirmPassword !== password ? <Alert variant="danger">Password Diff</Alert> : <></> }
                    { regFail === '' ? <></> : regFail === "OK" ? <Alert variant="success">Status: Successfully</Alert> : <Alert variant="danger">Status: Failed</Alert> }
                    <Button variant="secondary" onClick={onHideReg}>Close</Button>
                    <Button variant="outline-primary" onClick={(e) => handleSubmit(e)}>Register</Button>
                    <Button variant="primary" >Login</Button>
                </Modal.Footer>
            </Modal>
    );
}

export default PopupReg;

PopupReg.propTypes = {
    setToken: PropTypes.func.isRequired
}