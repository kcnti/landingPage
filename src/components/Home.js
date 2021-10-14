import { Button, Container } from 'react-bootstrap';
import ReactTypingEffect from 'react-typing-effect';
import { toPortal } from '../functions/scroll'

export default function Home(props) {

    const { ip } = props

    return (
        <Container id="Home" style={{ paddingTop: 200, paddingBottom: 250 }}>
            <div className="Home">
                <br />
                <ReactTypingEffect className="typingeffect" text={["Hello to " + ip, "Made With ❤️ By Kanti"]} speed={50} erase={50}></ReactTypingEffect>
                <br />
                <Button onClick={() => toPortal()} variant="outline-dark">Get Started</Button>
            </div>
        </Container>
    );
}