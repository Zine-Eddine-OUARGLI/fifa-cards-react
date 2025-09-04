import { player } from "../data/players";
import Player from "./player";
export default function PlayersList() {
  return (
    //cards container so that they're all shown properly through the grid
    <div className="cards-container">
      {player.map((player, index) => (
        <Player
          key={index}
          name={player.name}
          team={player.team}
          nationality={player.nationality}
          jerseyNumber={player.jerseyNumber}
          age={player.age}
          img={player.image}
        ></Player>
      ))}
    </div>
  );
}
