import { useParams } from 'react-router-dom';
import { FaGithub, FaItchIo, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import { useState, useEffect, useRef } from 'react';
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
                    {/* TITLE / DESCRIPTION */}
                    <section className="Game-Info">
                        <h1>{game.name}</h1>
                        <h2>{game.role}</h2>
                        <h2>Engine & Software: {game.engine}</h2>
                        <h2>Team Size: {game.team}</h2>
                        <h2>Game Page: <a target="_blank" href={`${game.page}`}>{game.page}</a></h2>
                        <p>{game.desc}</p>
                    </section>
                    {/* HERO MEDIA */}
                    <section className="Hero-Media">
                        <video controls muted src={game.video} alt={game.name} />
                    </section>


                    {/* SYSTEM SECTION */}
                    <section className="System">
                        {game.systemName?.map((sys, i) => (
                            i % 2 == 0 ?
                                <div>
                                    <h2 className='System-Header' style={{ textAlign: 'left' }}>{sys}</h2>
                                    <div className="System-Content">
                                        <img src={game.systemImage[i]} alt="System concept" />
                                        <div className="System-Text">
                                            <p>
                                                {game.systemDesc[i]}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                :
                                <div>
                                    <h2 className='System-Header'>{sys}</h2>
                                    <div className="System-Content">
                                        <div className="System-Text">
                                            <p>
                                                {game.systemDesc[i]}
                                            </p>
                                        </div>
                                        <img src={game.systemImage[i]} alt="System concept" />
                                    </div>
                                </div>

                        ))}



                    </section>
                    <section className="Gallery">
                        <h1 className='Section-Header'>GALLERY</h1>
                        <ResponsiveMasonry columnsCountBreakPoints={{ 350: 1, 600: 2, 900: 2 }}>
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
            <Link style={{color:"transparent"}} to={`/`}>
                <div className="Navbar-Center" onClick={() => scrollToSection('Hero')}>
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

export default GamePage;
