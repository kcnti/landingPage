import { Container } from 'react-bootstrap';

export default function About() {
    return(
        <Container id="About" style={{ padding: 20, marginTop: 180, marginBottom: 300 }}>
            <div data-aos="fade-left" className="About">
                <h4>About</h4>
                <div className="About-content">
                    <img src="https://scontent.fbkk29-2.fna.fbcdn.net/v/t1.6435-9/163765827_2551391631830297_740082723885423571_n.jpg?_nc_cat=107&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=Bkvzqe6FYEIAX9VR-EH&_nc_ht=scontent.fbkk29-2.fna&oh=268467cb51c042dc8b3f8985caa1d818&oe=618BE09E" alt="person" />
                    <p>Hello World, I'm Earth</p>
                </div>
            </div>
        </Container>
    );
}