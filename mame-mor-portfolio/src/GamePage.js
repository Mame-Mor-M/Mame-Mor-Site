import { useParams } from 'react-router-dom';
import game_thumbnails from './data.js';

const GamePage = () => { 
    const { id } = useParams();
    const game = game_thumbnails.find(p => p.id === id);

    if (!game) return <p>Game not found</p>;

    return (
        <div className="Game-Page">
            <h1>{game.name}</h1>
            <p>{game.desc}</p>
            <div className="Media">
                <img src={game.content} alt={game.name} />
                {game.video && (
                    <video
                        src={game.video}
                        muted
                        controls
                        loop
                        playsInline
                        preload="metadata"
                    />
                )}
            </div>
        </div>
    );
};

export default GamePage;
