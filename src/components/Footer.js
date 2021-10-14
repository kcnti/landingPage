import '../App.css';

export default function Footer() {
    return (
        <footer style={{ textAlign: 'center', backgroundColor: 'rgb(240, 240, 240)', padding: 20}}>
            Coded with ❤️ & ReactJS by
            <a href="https://www.facebook.com/earthktnn/" rel="noreferrer" target="_blank" style={{ marginLeft: 4 }}>
            Kanti
            </a>
            <div className="social">
                <a href="https://github.com/kcnti" rel="noreferrer" target="_blank"><i class="fab fa-github fa-lg"></i></a>
                <a href="https://www.facebook.com/earthktnn/" rel="noreferrer" target="_blank"><i class="fab fa-facebook fa-lg"></i></a>
                <a href="https://instagram.com/kcntinun" rel="noreferrer" target="_blank"><i class="fab fa-instagram fa-lg"></i></a>
            </div>
        </footer>
    )
}