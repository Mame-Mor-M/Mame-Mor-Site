import { FaGithub,FaItchIo, FaLinkedin, FaEnvelope, FaUnity, FaJava, FaReact, FaPython , FaFigma,} from 'react-icons/fa';
import { SiBlender, SiGodotengine, SiJavascript, SiMysql, SiC, SiFlutter, SiAndroidstudio, SiFmod, SiFirebase, SiMongodb  } from "react-icons/si";
import { PiFileCpp, PiFileSql, PiFileC, PiFileCSharp} from "react-icons/pi"
import { useState, useEffect, useRef } from 'react';
import Masonry, { ResponsiveMasonry } from 'react-responsive-masonry';
import emailjs from "@emailjs/browser";
import './Home.css';
import { Link } from 'react-router-dom';

function Home() {
  const game_thumbnails = [
    {id: "Pick-Your-Poison", content: `${process.env.PUBLIC_URL}/Thumbnails/PYP.png`, name: "Pick Your Poison", desc: "A survival taste-testing game where players must test dishes for poison before serving them. Tasting a dish will reveal ingredients on a one-per bite basis, players must must control their bites to avoid eating poison, and tasting too much before serving.", video: "https://github.com/Mame-Mor-M/Mame-Mor-Site/releases/download/PortfolioVids/PYPShort.mp4", tech: [SiGodotengine]  },
    {id: "Upperdut", content: `${process.env.PUBLIC_URL}/Thumbnails/Upperdut.png`, name: "Upperdut", desc: "A unique take on the platform fighter genre, Upperdut is a 2-player game where instead of fighting each other, players work together! Conquer the heights of the gym as you work your way up to the top.", video: "https://github.com/Mame-Mor-M/Mame-Mor-Site/releases/download/PortfolioVids/UpperdutShort.mp4", tech: [SiGodotengine] },
    {id: "Neon-Vendetta", content: `${process.env.PUBLIC_URL}/Thumbnails/NeonVendetta.png`, name: "Neon Vendetta", desc: "Experience a 2D cyberpunk action platformer heavily inspired by SpeedRunners, and Vector. Each level introduces new twists on mechanics from intense boss fights to platformer minigames.", video: "https://github.com/Mame-Mor-M/Mame-Mor-Site/releases/download/PortfolioVids/NeonShort.mp4", tech: [FaUnity, PiFileCSharp] },
    {id: "Bus-Rush", content: `${process.env.PUBLIC_URL}/Thumbnails/BusRush.png`, name: "Bus Rush", desc: "A time-based arcade racing game where players must reach the final stop while picking up as many passengers as possible. The game grades players on punctuality and passenger count, with performance bonuses tied to how fast they complete their route, and how little damage their vehicle sustains.", video: "https://github.com/Mame-Mor-M/Mame-Mor-Site/releases/download/PortfolioVids/BusRush.mp4", tech: [FaUnity, PiFileCSharp, SiBlender] },
    {id: "Citizen-Jane", content: `${process.env.PUBLIC_URL}/Thumbnails/CitizenJane.png`, name: "Citizen Jane", desc: "Play as private investigator Jane, and  solve a high profile murder. Traverse through comic panels and obtain clues,  and combine them to solve the mystery.", video: "https://github.com/Mame-Mor-M/Mame-Mor-Site/releases/download/PortfolioVids/CitizenJane.mp4", tech: [SiGodotengine] },
    {id: "Moonlight-Paws", content: `${process.env.PUBLIC_URL}/Thumbnails/MoonlightPaws.png`, name: "Moonlight Paws", desc: "A puzzle-based narrative experience focused on shape recognition and spatial navigation. Each level presents a hint describing a specific shape. Players must read the hint carefully, choose a direction to move, and explore the space to find the correct match.", video: "https://github.com/Mame-Mor-M/Mame-Mor-Site/releases/download/PortfolioVids/MoonShort.mp4", tech: [SiGodotengine] },
    {id: "Endzone", content: `${process.env.PUBLIC_URL}/Thumbnails/Endzone.png`, name: "Endzone", desc: "An arcade style sports survival game. Avoid opposing defenders in each region of the football field and reach the opponents end zone to win the game.", video: "https://github.com/Mame-Mor-M/Mame-Mor-Site/releases/download/PortfolioVids/EndzoneGameplay.mp4", tech: [] },
    {id: "Flipped-Out", content: `${process.env.PUBLIC_URL}/Thumbnails/FlippedOut.jpg`, name: "Flipped Out", desc: "A fast-paced mobile memory matching game with both solo and competitive play, player trophies, and a global leaderboard", video: "https://github.com/Mame-Mor-M/Mame-Mor-Site/releases/download/PortfolioVids/FlippedShort.mp4", tech: [SiFlutter, FaFigma, SiFirebase] },
    {id: "Othello", content: `${process.env.PUBLIC_URL}/Thumbnails/Othello.png`, name: "Othello", desc: "A digital recreation of the board game Othello built entirely in Java using JavaFX for the GUI.  this application allows for Human vs. Human, Human vs. CPU, and CPU vs. CPU gameplay.", video: "https://github.com/Mame-Mor-M/Mame-Mor-Site/releases/download/PortfolioVids/OthelloPlaythrough.mp4", tech: [FaJava]},
  ]

  const project_thumbnails = [
    {id: "Post-Guardian", content: `${process.env.PUBLIC_URL}/Thumbnails/PostGuardian.jpg`, name: "Post Guardian", desc: "A Chrome extension which overlays social media platforms and highlights words/phrases which users are suggested to not post. Post Guardian also gives an analysis on uploaded videos to provide feedback on timestamps that may be inappropriate to post", video: "https://github.com/Mame-Mor-M/Mbong-Art-Portfolio/releases/download/Animation/Flux_Intro.mp4" },
    {id: "Pulsefex", content: `${process.env.PUBLIC_URL}/Thumbnails/Pulsefex.jpg`, name: "Pulsefex", desc: "An embedded systems project that captures and displays real-time heart rate and SpO2 levels. The system is built on the STM32WB55RG MCU and interfaces with the MAX30102 pulse oximeter and TMP102 temperature sensor, with real-time data output to an SSD1306 OLED screen.", video: "https://github.com/Mame-Mor-M/Mbong-Art-Portfolio/releases/download/Animation/Flux_Intro.mp4" },
  ]
  
  const web_thumbnails = [
    {
      content: `${process.env.PUBLIC_URL}Thumbnails/MbongSite.png`, name: "Artist Portfolio Website", link: "https://mbongmbong.com/", video: "https://github.com/Mame-Mor-M/Mbong-Art-Portfolio/releases/download/Animation/Flux_Intro.mp4" }
  ]

  return (
    <div className="Home">
      <Navbar />
      {/*<BlogPanel/>*/}
      <div className="Hero" id="Hero">
        <video src={'https://github.com/Mame-Mor-M/Mame-Mor-Site/releases/download/PortfolioVids/GameReel.mp4'} muted autoPlay loop playsInline preload='auto' controls={false}></video>
      </div>

      <div className="Projects" id="Games">
        <header className="Section-Header" >
          Games
        </header>
        <ResponsiveMasonry columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 3, 2000: 4, 2500: 5, 3000: 7, 3500: 10}}>
          <Masonry columnsCount={3} gutter="16px">
            {game_thumbnails.map((image, i) => (
              <Link key={image.id} alt={image.id} to={`/projects/${image.id}`}>
              <div
                key={i}
                className="Projects-item"
                onMouseEnter={e => {
                  const video = e.currentTarget.querySelector("video");
                  if (video){
                    video.play().catch(()=>{});
                  }
                  
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
                    <div className="TechStack">
                      {image.tech?.map((Icon, i) => (
                        <Icon className="TechStack-Icon " key={i} />
                      ))}
                    </div>
                </div>

                <div className="Overlay">
                  <h3>{image.name}</h3>
                  <p>{image.desc}</p>
                </div>
              </div>
              </Link>))}
            
          </Masonry>
        </ResponsiveMasonry>
      </div>

      <div className="Stack-Section">
        <h2 className="Stack-Title">Skills</h2>

        <div className="Stack-Grid">
          <FaUnity title="Unity" />
          <SiBlender title="Blender" />
          <SiGodotengine title="Godot" />
          <FaPython title="Python" />
          <FaJava title="Java" />
          <SiJavascript title="JavaScript" />
          <FaReact title="React" />
          <PiFileCpp title="C++" />
          <SiC title="C" />
          <SiFlutter title="Flutter" />
          <SiAndroidstudio title="Android Studio" />
          <FaFigma title="Figma" />
          <SiMysql title="MySQL" />
          <PiFileSql title="SQL" />
          <SiFmod title="FMOD" />
          <PiFileC title="C" />
          <PiFileCSharp title="C#" />
          <SiMongodb title="MongoDB" />
          <SiFirebase title="Firebase" />
        </div>
      </div>


      


      <div className="Projects">
        <header className="Section-Header" id="Projects">
          Other Projects
          <p className='Section-Desc'>Non-game projects</p>
        </header>
        <ResponsiveMasonry columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 3, 2000: 4, 2500: 5, 3000: 7, 3500: 10}}>
          <Masonry columnsCount={3} gutter="16px">
            {project_thumbnails.map((image, i) => (
              <Link key={image.id} to={`/projects/${image.id}`}>
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
              </Link>))}
            
          </Masonry>
        </ResponsiveMasonry>
      </div>

      <div className="Projects">
        <header className="Section-Header" id="WebDesign">
          Design Projects
        </header>
        <ResponsiveMasonry columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 3, 2000: 4, 2500: 5, 3000: 7, 3500: 10 }}>
          <Masonry columnsCount={3} gutter="16px">
            {web_thumbnails.map((image, i) => (
              <a href={image.link} target="_blank" rel="noreferrer">
              <div 
                  key={i}
                  className="Design-item"
                >
                  <div className="Media">
                    <img src={image.content} alt={image.name} />
                  </div>

                  <div className="Overlay">
                    <h3>{image.name}</h3>
                  </div>
                </div></a>))}

          </Masonry>
        </ResponsiveMasonry>
      </div>

      <div className="About-Section">
        <h2 className="About-Title">About Me</h2>

        <div className="About-Grid">
          {/* Left Content */}
          <div className="About-Left">
            <h3 className="About-Name">Mame Mor Mbacke</h3>
            <p className="About-Role">Programmer & Game Designer</p>

            <div className="About-Description">
              <p>
                I'm a fourth year Computer Science student at York University and an aspiring Game Developer. 
                I've always had an idea that I wanted to pursue game development ever since I was a kid making levels in Roblox Studio, 
                here my love of video games grew from enjoying gameplay, to enjoying the creation process. 
                This is what pushed me into the programming space and from there allowed me to learn so much more and grow a new interest in the field of 
                Computer Science & Game Development.
              </p>
            </div>
          </div>

          {/* Right Image Placeholder */}
          <div className="About-Right">
            <img src="./other/MameMorMbacke.jpg" className="About-Image"></img>
          </div>
        </div>
      </div>

      {/* <div id="Contact" className="Contact">
        <Contact />
      </div> */}

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
    const timer = setTimeout(() => setVisible(true), 500); // Play around with time here, idk if good yet
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

      <div className="Navbar-Center" onClick={() => scrollToSection('Hero')}>
        <h1>M.</h1>
      </div>

      <div className="Navbar-Right">
        <button onClick={() => scrollToSection('Games')}>Games</button>
        <button onClick={() => scrollToSection('Projects')}>Other Projects</button>
        <a style={{}} href="https://github.com/Mame-Mor-M" target="_blank" rel="noopener noreferrer">
          <FaGithub />
        </a>
        <a style={{}} href="https://www.linkedin.com/in/mame-mor-mbacke/" target="_blank" rel="noopener noreferrer">
          <FaLinkedin />
        </a>
        <a style={{}} href="https://itch.io/profile/nova-so1" target="_blank" rel="noopener noreferrer">
          <FaItchIo />
        </a>
        <button onClick={() => window.open(
          "https://mail.google.com/mail/?view=cm&to=mamemormmbacke@gmail.com&su=",
          "_blank")}><FaEnvelope /></button>
        {/* <button style={{}} onClick={() => scrollToSection('Contact')}>
          <FaEnvelope />
        </button> */}
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
      title: "React Patterns",
      desc: "Floating UI done right",
      image: "/logo192.png",
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
export default Home;
