import "./App.css";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Home from "./components/Home/Home"
import Projects from "./components/Projects/Projects"
import Nav from "./components/Nav/Nav";

function App() {
  return (
    <BrowserRouter>
      <Nav/>
      <Routes>
        <Route path={"/"} element={<Home/>}/>
        <Route path={"/proyects"} element={<Projects/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
