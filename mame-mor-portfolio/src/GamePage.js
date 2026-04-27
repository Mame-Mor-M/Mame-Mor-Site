import { useParams } from 'react-router-dom';
import { FaGithub, FaItchIo, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import { useState, useEffect} from 'react';
import game_thumbnails from './data.js';
import Masonry, { ResponsiveMasonry } from 'react-responsive-masonry';
import "./GamePage.css"
import { Link } from 'react-router-dom';

const GamePage = () => {
    const { id } = useParams();
    const game = game_thumbnails.find(p => p.id === id);

    if (!game) return <p>Game not found</p>;

    return (
        <div><Navbar />
            <div className="Game-Page">
                <div className="Page-Content">
                    <section className="HeroGame">
                        <div className="HeroGame-Left">
                            <h1>{game.name}</h1>

                            <div className="Game-Meta">
                                <span>{game.role}</span>
                                <span>{game.engine}</span>
                                <span>Team Size: {game.team}</span>
                                <span>{game.devTime}</span>
                                <span>{game.type}</span>
                            </div>
                            {game.page !== "" ?
                                <a className="Game-Link" target="_blank" rel="noopener noreferrer" href={game.page}>
                                    {game.type === "Game" ? "Play the Game" : "Check out the repository"}
                                </a>
                                : null}


                            <p className="Game-Desc">{game.desc}</p>
                        </div>

                        <div className="HeroGame-Right">
                            {game.video ? <video controls src={game.video}></video> : <img src={game.content}></img>}
                        </div>
                    </section>


                    <section className="System">
                        <h1 className="Section-Header">SYSTEMS</h1>

                        {game.systemName?.map((sys, i) => (

                            <div className="System-Card" key={i}>

                                <div className="System-Media">
                                    {game?.systemImage[i]
                                        ? <img src={game.systemImage[i]} />
                                        : <video src={game.systemVideo[i]} autoPlay loop muted />
                                    }
                                </div>

                                <div className="System-Text">
                                    <h3>{sys}</h3>

                                    {renderDescription(game.systemDesc[i])}

                                    {game?.systemLink[i] &&
                                        <a target="_blank" rel="noreferrer" href={game.systemLink[i]}>
                                            View Script on GitHub
                                        </a>}
                                </div>

                            </div>

                        ))}

                    </section>
                    <section className="Gallery">
                        <h1 className='Section-Header'>GALLERY</h1>
                        <ResponsiveMasonry columnsCountBreakPoints={{ 350: 1, 600: 2, 900: 3, 2000: 4, 2500: 5, 3000: 7, 3500: 10 }}>
                            <Masonry columnsCount={2} gutter='16px'>
                                {game.gallery?.map((image) => (
                                    <img src={image}></img>
                                ))}
                            </Masonry>
                        </ResponsiveMasonry>
                    </section>

                </div>
            </div>
        </div>
    );
};

const Navbar = () => {
    const [visible, setVisible] = useState(false);
    const [lastScrollY, setLastScrollY] = useState(0);

    const scrollToSection = (id) => {
        const section = document.getElementById(id);
        if (section) {
            section.scrollIntoView({ behavior: 'smooth' });
        }
    };

    useEffect(() => {
        const timer = setTimeout(() => setVisible(true), 200); // Play around with time here, idk if good yet
        return () => clearTimeout(timer);
    }, []);

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY;
            if (currentScrollY > lastScrollY && currentScrollY > 10) {
                setVisible(false);
            } else {
                setVisible(true);
            }
            setLastScrollY(currentScrollY);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [lastScrollY]);

    return (
        <nav className={`Navbar ${visible ? 'visible' : 'hidden'}`}>
            <Link style={{ color: "transparent" }} to={`/`}>
                <div className="Navbar-Center" onClick={() => scrollToSection('HeroGame')}>
                    <h1>M.</h1>
                </div></Link>

            <div className="Navbar-Right">
                <a style={{}} href="https://github.com/Mame-Mor-M" target="_blank" rel="noopener noreferrer">
                    <FaGithub />
                </a>
                <a style={{}} href="https://www.linkedin.com/in/mame-mor-mbacke/" target="_blank" rel="noopener noreferrer">
                    <FaLinkedin />
                </a>
                <a style={{}} href="https://itch.io/profile/nova-so1" target="_blank" rel="noopener noreferrer">
                    <FaItchIo />
                </a>
                <button style={{}} onClick={() => scrollToSection('Contact')}>
                    <FaEnvelope />
                </button>
            </div>
        </nav>
    );
};

function renderDescription(text) {
    const regex = /\/~\s*(.*?)\s*~\//g;
    const parts = [];
    let lastIndex = 0;
    let match;

    while ((match = regex.exec(text)) !== null) {
        if (match.index > lastIndex) {
            parts.push(
                <p key={lastIndex}>
                    {text.slice(lastIndex, match.index)}
                </p>
            );
        }

        parts.push(
            <h4 key={match.index}>
                {match[1]}
            </h4>
        );

        lastIndex = regex.lastIndex;
    }

    if (lastIndex < text.length) {
        parts.push(
            <p key={lastIndex + "end"}>
                {text.slice(lastIndex)}
            </p>
        );
    }

    return parts;
}

export default GamePage;
