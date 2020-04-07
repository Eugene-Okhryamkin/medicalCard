import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import { connect } from "react-redux";
import propTypes from "prop-types";
import Auth from "../Auth/Auth.jsx";
import Home from "../Home/Home.jsx";
import "./Main.sass";

class Main extends Component {
    render() {

        const { user } = this.props;

        console.log(user);

        return (
            <div id="main">
                <Switch>
                    
                    {
                        user != null ? <Route exact path="/" component={ Home } /> : <Route exact path="/login" component={ Auth } />
                    }
                </Switch>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    user: state.getUser.user
});

Main.propTypes = {
    user: propTypes.object
}

export default connect(mapStateToProps, null)(Main);