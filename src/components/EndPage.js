import {useLocation} from "react-router-dom";
import game_over from "../img/game_over.jpeg";
const End = () => {
    const location = useLocation();
  return (
    <div>
      <img src={game_over} alt="Game Over" className="custom-image" />
      <div>
        <p>The total distance you were off by is {location.state.d} meters</p>
      </div>
    </div>
  );
};
export default End;
