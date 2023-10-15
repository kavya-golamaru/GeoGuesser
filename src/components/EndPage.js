import {useLocation} from "react-router-dom";
const End = () => {
    const location = useLocation();
  return (
    <div>
      <p>End</p>
      <div>
        <p>Your score is {location.state.score}</p>
      </div>
    </div>
  );
};
export default End;
