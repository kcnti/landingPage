import '../App.css';
import Home from './Home';
import Portal from './Portal';
import About from './About';

export default function Landing(props) {
    const { ip } = props;

    return (
        <div>
            <Home ip={ip} />
            <div style={{ borderBottom: "1px solid black" }}></div>
            <Portal />
            <div style={{ borderBottom: "1px solid black" }}></div>
            <About />
        </div>
    );
}