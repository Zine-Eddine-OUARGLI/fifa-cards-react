import { player } from "../data/players";
import Player from "./player";
export default function PlayersList() {
  return (
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
