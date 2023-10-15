import {useLocation} from "react-router-dom";
const End = () => {
    const location = useLocation();
  return (
    <div>
      <p>End</p>
      <div>
        <p>Your score is {location.state.d}</p>
      </div>
      <div>
        <a href ="/"> <button>Back to Beginning</button></a>
      </div>
    </div>
  );
};
export default End;
