import React from "react";
import Header from "../containers/Header/Header.jsx";
import Sidebar from "../containers/Sidebar/Sidebar.jsx";
import Main from "../pages/Main/Main.jsx";
import "normalize.css";
import "./App.sass";

const App = () => (
    <>
        <Header />
        <Sidebar />
        <Main />
    </>
)


export default App;