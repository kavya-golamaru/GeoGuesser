import {useLocation} from "react-router-dom";
import game_over from "../img/game_over.jpeg";
const End = () => {
    const location = useLocation();
  return (
    <div className="custom-background">
      <img src={game_over} alt="Game Over" className="custom-image" />
      <div className="score">
        <p>The total distance you were off by is {location.state.d} meters!</p>
      </div>
      <div>
        <a href ="/"> <button className="back">Restart</button></a>
      </div>
    </div>
  );
};
export default End;
