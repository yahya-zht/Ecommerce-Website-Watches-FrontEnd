import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import "./App.css";
// import { Routes } from "./routes/Routes";
import Home from "./pages/FrontEnd/Home";
import About from "./pages/FrontEnd/About";
import Routers from "./routes/Routers";

function App() {
    return <Routers />;
}

export default App;
