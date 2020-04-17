import React, { Component } from "react";
import Auth from "../pages/Auth/Auth.jsx";
import Main from "../pages/Main/Main.jsx"
import { Switch, Route, Redirect } from "react-router-dom";
import Header from "../containers/Header/Header.jsx";
import Sidebar from "../containers/Sidebar/Sidebar.jsx"
import Pacients from "./../pages/Pacients/Pacients.jsx";
import jwtDecode from "jwt-decode";
import { connect } from "react-redux";
import { setUser } from "../actions/setUserAction";
import propTypes from "prop-types";
import "normalize.css";
import "./App.sass";

class App extends Component {

    componentDidMount() {
        const userData = localStorage.getItem("authData");
        const { setUser } = this.props;

        if(userData) {
            const user = jwtDecode(userData);
            setUser(user);
        }
    }


    render() {
        const { isAuthenticated } = this.props;
        console.log(isAuthenticated);
        if(isAuthenticated) {
            return (
                <>
                    <Header />
                    <Sidebar />
                    <div id="main-container">
                        <Switch>
                            <Route exact path="/" component={ Main } />
                            <Route exact path={"/pacients"} component={ Pacients } />
                            <Redirect to="/" />
                        </Switch>
                    </div>
                </>
            )
        } else {
            return (
                <Switch>
                    <Route exact path="/login" component={ Auth } />
                    <Redirect to="/login" />
                </Switch>
            )
        } 
        
    }
}

const mapStateToProps = state => ({
    isAuthenticated: state.auth.isAuthenticated
});

const mapDispatchToProps = dispatch => ({
    setUser: user => dispatch(setUser(user))
});


App.propTypes = {
    setUser: propTypes.func.isRequired,
    isAuthenticated: propTypes.bool.isRequired
}

export default connect(mapStateToProps, mapDispatchToProps)(App);