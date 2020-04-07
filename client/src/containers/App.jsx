import React, { Component } from "react";
import Header from "./Header/Header.jsx";
import Main from "../pages/Main/Main.jsx";
import "normalize.css";
import "./App.sass";

class App extends Component {

    render() {
        return (
            <>
                <Header />
                <Main />
            </>
        )
    }
}

export default App