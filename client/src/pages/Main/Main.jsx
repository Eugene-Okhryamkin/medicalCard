import React, { Component } from "react";
import Header from "../../containers/Header/Header.jsx";
import Sidebar from "../../containers/Sidebar/Sidebar.jsx"
import "./Main.sass";

class Main extends Component {
    render() {
        return (
            <>
            <Header />
            <div id="main">
                <Sidebar />
            </div>
            </>
        )
    }
}

export default Main;