import { BrowserRouter, Routes, Route } from "react-router-dom";
import Welcome from "./components/WelcomePage";
import Start from "./components/StartPage";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Welcome/>} />
        <Route path="/play" element={<Start />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;