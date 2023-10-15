import { BrowserRouter, Routes, Route } from "react-router-dom";
import Welcome from "./components/WelcomePage";
import Start from "./components/StartPage";
import End from "./components/EndPage"

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Welcome/>} />
        <Route path="/play" element={<Start />} />
        <Route path="/end" element={<End />}/>
      </Routes>
    </BrowserRouter>
  );
};

export default App;