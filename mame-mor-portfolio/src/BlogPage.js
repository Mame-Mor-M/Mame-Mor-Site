
import { FaGithub, FaItchIo, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import blogs from "./blogData";
import "./BlogPage.css";

function Blog() {
    return (
        <div className="BlogPage"><Navbar />
            {blogs.map((blog, index) => (
                <div key={index} className="BlogCard">

                    <h2 className="BlogTitle">{blog.title}</h2>
                    <p className="BlogDate">{blog.date}</p>

                    {blog.media.length > 0 && (
                        <div className="BlogMediaRow">
                            {blog.media.map((item, i) => (
                                <div key={i} className="MediaWrapper">

                                    {item.type === "image" && (
                                        <img
                                            src={item.src}
                                            alt={blog.title}
                                            className="BlogMedia"
                                        />
                                    )}

                                    {item.type === "video" && (
                                        <video
                                            className="BlogMedia"
                                            controls
                                            src={item.src}
                                        />
                                    )}

                                </div>
                            ))}
                        </div>
                    )}

                    <p className="BlogSummary">{blog.summary}</p>

                </div>
            ))}
        </div>
    );
}

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
export default Blog;
