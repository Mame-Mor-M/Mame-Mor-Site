import { useParams } from 'react-router-dom';
import game_thumbnails from './data.js';
import Masonry, { ResponsiveMasonry } from 'react-responsive-masonry';
import "./GamePage.css"

const GamePage = () => {
    const { id } = useParams();
    const game = game_thumbnails.find(p => p.id === id);

    if (!game) return <p>Game not found</p>;

    return (
        <div className="Game-Page">
            <div className="Page-Content">
            {/* TITLE / DESCRIPTION */}
            <section className="Game-Info">
                <h1>{game.name}</h1>
                <h2>{game.role}</h2>
                <h2>Engine: {game.engine}</h2>
                <h2>Team Size: {game.team}</h2>
                <h2>Game Page: <a target="_blank" href={`${game.page}`}>{game.page}</a></h2>
                <p>{game.desc}</p>
            </section>
            {/* HERO MEDIA */}
            <section className="Hero-Media">
                <video src={game.video} alt={game.name} />
            </section>


            {/* SYSTEM SECTION */}
            <section className="System">
                {game.systemName?.map((sys, i) => (
                    i % 2 == 0 ?
                        <div>
                            <h2 className='System-Header' style={{textAlign:'left'}}>{sys}</h2>
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
    );
};

export default GamePage;
