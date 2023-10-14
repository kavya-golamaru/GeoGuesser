import { BrowserRouter, Routes, Route } from "react-router-dom";
import Welcome from "./components/WelcomePage";
import Start from "./components/StartPage";
import Game from "./components/GamePage";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Welcome/>} />
        <Route path="/start" element={<Start />} />
        <Route path="/game" element={<Game/>} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;