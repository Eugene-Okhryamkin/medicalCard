import React, { Component } from "react";
import "./Home.sass";
import Sidebar from "../../containers/Sidebar/Sidebar.jsx";
import Workarea from "../../containers/Workarea/Workarea.jsx";

class Home extends Component {
    render() {
        return (
            <div id="Home">
                <Sidebar />
                <Workarea />
            </div>
        )
    }
}

export default Home;