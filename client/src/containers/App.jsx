import React, { Component } from "react";
import Header from "./Header/Header.jsx";
// import Sidebar from "./Sidebar/Sidebar.jsx";
// import Workarea from "./Workarea/Workarea.jsx"; 
import Auth from "../pages/Auth/Auth.jsx";
import "normalize.css";
import "./App.sass";

class App extends Component {

    render() {
        return (
            <>
                <Header />
                <div id="main">
                    <Auth />
                    {/* <Sidebar />
                    <Workarea /> */}
                </div>
            </>
        )
    }
}

export default App