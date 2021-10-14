import { Navbar, Nav, Container, Button } from 'react-bootstrap'
import PopupLogin from './PopupLogin';
import React, { useState } from 'react';
import SessionToken from '../sessToken';
import SessionUsername from '../sessUsername';
import { toHome, toPortal, toAbout } from '../functions/scroll';
import { getUsername } from '../functions/callSessionStorage'

function Logout() {
    sessionStorage.clear()
    window.location.reload()
}

function NAVbar() {
    
    const [modalShow, setModalShow]         = React.useState(false);
    const [username, setUsername]           = useState();
    const [password, setPassword]           = useState();
    const [hovering, setHovering]           = useState(false)

    const { token, setToken }               = SessionToken();
    const { sessionName, setSessionName }   = SessionUsername();

    window.addEventListener('scroll', (event) => {
        let homeHeight = document.getElementById("Home");
        let offsetBottom = homeHeight.offsetTop + homeHeight.offsetHeight;
        if (window.pageYOffset > offsetBottom) {
            document.getElementById("Navbar").style.borderBottom = "none";
        } else {
            document.getElementById("Navbar").style.borderBottom = "1px solid grey";
        }
    })

    return (
        <>
            <Navbar id="Navbar" style={{ borderBottom: "1px solid grey" }} className="justify-content-between" bg="light" expand="md" fixed="top">
                <Container>
                    <Navbar.Brand href="/" style={{ fontSize: 20 }}>
                        Kanti
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <div className="me-auto"></div>
                        <Nav style={{ padding: 5 }} className="mr-auto">
                            <Nav.Link onClick={() => toHome()} target="_blank">
                                Home
                            </Nav.Link>
                            <Nav.Link onClick={() => toPortal()} target="_blank">
                                Portal
                            </Nav.Link>
                            <Nav.Link onClick={() => toAbout()} target="_blank">
                                About
                            </Nav.Link>
                            <Nav.Link href="#" style={!token ? { paddingTop: 0 } : {}} >
                                {!token && !getUsername() ? <Button onClick={() => setModalShow(true)}>Login</Button> : <p id="logged-in" onMouseEnter={() => setHovering(true)} onMouseLeave={() => setHovering(false)}>{hovering ? <p onClick={() => Logout()}>{"Logout"}</p> : "Logged in as " + getUsername()}</p>}
                            </Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            <PopupLogin
                show={modalShow}
                onHide={() => setModalShow(false)}
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

export default NAVbar;