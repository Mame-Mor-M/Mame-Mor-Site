import { FaGithub,FaItchIo, FaLinkedin, FaEnvelope, FaVolumeMute, FaVolumeUp, } from 'react-icons/fa';
import { useState, useEffect, useRef } from 'react';
import Masonry, { ResponsiveMasonry } from 'react-responsive-masonry';
import emailjs from "@emailjs/browser";
import './Home.css';

function App() {
  const game_thumbnails = [
    { content: './thumbnails/BusRush.png', name: "Bus Rush", desc: "Chaotic bus driving simulator", video: "https://github.com/Mame-Mor-M/Mbong-Art-Portfolio/releases/download/Animation/Flux_Intro.mp4"},
    { content: './thumbnails/CitizenJane.png', name: "Bus Rush", desc: "Chaotic bus driving simulator", video: "https://github.com/Mame-Mor-M/Mbong-Art-Portfolio/releases/download/Animation/Flux_Intro.mp4" },
    { content: './thumbnails/Endzone.png', name: "Bus Rush", desc: "Chaotic bus driving simulator", video: "https://github.com/Mame-Mor-M/Mbong-Art-Portfolio/releases/download/Animation/Flux_Intro.mp4" },
    { content: './thumbnails/FlippedOut.jpg', name: "Bus Rush", desc: "Chaotic bus driving simulator", video: "https://github.com/Mame-Mor-M/Mbong-Art-Portfolio/releases/download/Animation/Flux_Intro.mp4" },
    { content: './thumbnails/MoonlightPaws.png', name: "Bus Rush", desc: "Chaotic bus driving simulator", video: "https://github.com/Mame-Mor-M/Mbong-Art-Portfolio/releases/download/Animation/Flux_Intro.mp4" },
    { content: './thumbnails/NeonVendetta.png', name: "Bus Rush", desc: "Chaotic bus driving simulator", video: "https://github.com/Mame-Mor-M/Mbong-Art-Portfolio/releases/download/Animation/Flux_Intro.mp4" },
    { content: './thumbnails/PYP.png', name: "Bus Rush", desc: "Chaotic bus driving simulator", video: "https://github.com/Mame-Mor-M/Mbong-Art-Portfolio/releases/download/Animation/Flux_Intro.mp4" },
    { content: './thumbnails/Upperdut.png', name: "Bus Rush", desc: "Chaotic bus driving simulator", video: "https://github.com/Mame-Mor-M/Mbong-Art-Portfolio/releases/download/Animation/Flux_Intro.mp4" },

  ]

  const project_thumbnails = [
    { content: './thumbnails/PostGuardian.jpg', name: "Bus Rush", desc: "Chaotic bus driving simulator" },
    { content: './thumbnails/Pulsefex.jpg', name: "Bus Rush", desc: "Chaotic bus driving simulator" },
    { content: 'thumbnails/MbongSite.png', name: "Artist Portfolio Website", desc: "" }
  ]

  const website_thumbnails = [
    {content: 'thumbnails/MbongSite.png', name: "Artist Portfolio Website", desc: ""}
  ]


  return (
    <div className="Home">
      <Navbar />
      <BlogPanel/>
      <div className="Hero" id="Hero">
        <video src={''} muted autoPlay playsInline preload='auto' controls={false}></video>
      </div>
      <header className="Section-Header" id="Games">
        Games
        <p className='Section-Desc'></p>
      </header>
      <div className="Projects">
        <ResponsiveMasonry columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 3 }}>
          <Masonry columnsCount={3} gutter="16px">
            {game_thumbnails.map((image, i) => (
              <div
                key={i}
                className="Projects-item"
                onMouseEnter={e => {
                  const video = e.currentTarget.querySelector("video");

                  video && video.play();
                }}
                onMouseLeave={e => {
                  const video = e.currentTarget.querySelector("video");
                  if (video) {
                    video.pause();
                    video.currentTime = 0;
                  }
                }}
              >
                <div className="Media">
                  <img src={image.content} alt={image.name} />
                  <video
                    src={image.video}
                    muted
                    loop
                    playsInline
                    preload="metadata"
                  />
                </div>

                <div className="Overlay">
                  <h3>{image.name}</h3>
                  <p>{image.desc}</p>
                </div>
              </div>
            ))}
          </Masonry>
        </ResponsiveMasonry>

        <header className="Section-Header" id="Games">
          Demo Reel
        </header>
        <video controls={true} src={''}></video>
      </div>
      <header className="Section-Header" id="Projects">
        Other Projects
        <p className='Section-Desc'>Non-game projects</p>
      </header>
      <div className="Projects">
        <ResponsiveMasonry columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 3 }}>
          <Masonry columnsCount={3}>
            {project_thumbnails.map((image, i) => (
              <div className='Projects-item'>
                <img key={i} src={image.content} style={{ width: `100%` }} />
                {image.name}: {image.desc}
              </div>
            ))}

          </Masonry>
        </ResponsiveMasonry>
      </div>

      <div id="Contact" className="Contact">
        <Contact />
      </div>

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
    const timer = setTimeout(() => setVisible(true), 9000); // Play around with time here, idk if good yet
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
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
      <div className="Navbar-Left">
        {/*<button onClick={() => scrollToSection('About')}>About Me</button>*/}
        <button onClick={() => scrollToSection('Animations')}>Games</button>
        <button onClick={() => scrollToSection('Projects')}>Other Projects</button>
      </div>

      <div className="Navbar-Center" onClick={() => scrollToSection('Hero')}>
        <h1>Mame Mor Mbacke</h1>
        <p>Programmer & Game Designer</p>
      </div>

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

const Contact = () => {
  const form = useRef();
  const [sendMessage, setMessage] = useState("Send Message");

  const sendEmail = (e) => {
    e.preventDefault();
    setMessage("Sent")
    emailjs.sendForm(
      "service_uwh8xsc",
      "template_x6qnb18",
      form.current,
      "Z80bLHF2ujQrFBCXq"
    ).then(
      () => {

        setTimeout(() => {
          setMessage("Send Message");
        }, 1000)
        form.current.reset();
      },
      () => {
        alert("Something went wrong.");
      }
    );
  };

  return (
    <section id="Contact" className="contact-section">
      <div className="contact-card">
        <h1>Contact Me</h1>

        <form ref={form} onSubmit={sendEmail}>
          <label>Name*</label>
          <input type="text" name="name" required />

          <label>Email*</label>
          <input type="email" name="email" required />

          <label>Message*</label>
          <textarea name="message" rows="6" required />

          <button type="submit">{sendMessage}</button>
        </form>
      </div>
    </section>
  );
};

const BlogPanel = () => {
  const [minimized, setMinimized] = useState(false);

  const blogs = [
    {
      id: 1,
      title: "Design Systems",
      desc: "Why minimal UI scales better",
      image: "/blog1.jpg",
    },
    {
      id: 2,
      title: "React Patterns",
      desc: "Floating UI done right",
      image: "/blog2.jpg",
    },
    {
      id: 3,
      title: "React Patterns",
      desc: "Floating UI done right",
      image: "/logo192.png",
    },
    {
      id: 4,
      title: "React Patterns",
      desc: "Floating UI done right",
      image: "/blog2.jpg",
    },
    {
      id: 5,
      title: "React Patterns",
      desc: "Floating UI done right",
      image: "/blog2.jpg",
    },
  ];

  return (
    <div className={`floating-panel ${minimized ? "minimized" : ""}`}>
      <div className="panel-handle" onClick={() => setMinimized(!minimized)}>
        <span>{minimized ? "▲ Blogs" : "▼ Blogs"}</span>
      </div>

      {!minimized && (
        <div className="blog-list">
          {blogs.map((blog) => (
            <div className="blog-item" key={blog.id}>
              <img src={blog.image} alt={blog.title} />
              <div className="blog-text">
                <h4>{blog.title}</h4>
                <p>{blog.desc}</p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
export default App;
