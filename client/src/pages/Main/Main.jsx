import React, { Component } from "react";
import { connect } from "react-redux";
import { setUser } from "../../actions/setUserAction";
import { Switch, Route, Redirect } from "react-router-dom";
import Auth from "../Auth/Auth.jsx";
import Home from "../Home/Home.jsx";
import Pacients from "../Pacients/Pacients.jsx";
import Epicrisis from "../Epicrisis/Epicrisis.jsx";
import Diagnosis from "../Diagnosis/Diagnosis.jsx";
import DocumentsForGetExemption from "../DocumentsForGetExemption/DocumentsForGetExemption.jsx";
import XRay from "../XRay/XRay.jsx";
import Fluorography from "../Fluorography/Fluorography.jsx";
import Blood from "../Blood/Blood.jsx";
import Urine from "../Urine/Urine.jsx";
import Stool from "../Stool/Stool.jsx";
import jwtDecode from "jwt-decode";
import propTypes from "prop-types";
import "./Main.sass";


class Main extends Component {

    componentWillMount() {
        const userData = localStorage.getItem("authData");
        const { setUser } = this.props;

        if(userData) {
            const user = jwtDecode(userData);
            setUser(user);
        }
    }

    render() {
        const { isAuthenticated, menuState } = this.props;
        console.log(isAuthenticated);
        if(isAuthenticated) {
            return (
                <main id={!menuState.isHidden ? "main_active" : "main"}>
                    <div id="main-container" >
                        <Switch>
                            <Route exact path="/" component={ Home } />
                            <Route exact path={"/pacients"} component={ Pacients } />
                            <Route exact path={"/epicrisis"} component={ Epicrisis } />
                            <Route exact path={"/exemption"} component={ DocumentsForGetExemption } />
                            <Route exact path={"/diagnosis"} component={ Diagnosis } />
                            <Route exact path={"/xray"} component={ XRay } />
                            <Route exact path={"/fluorography"} component={ Fluorography } />
                            <Route exact path={"/blood"} component={ Blood } />
                            <Route exact path={"/urine"} component={ Urine } />
                            <Route exact path={"/stool"} component={ Stool } />
                            <Redirect to="/" />
                        </Switch>
                    </div>
                </main>
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
    isAuthenticated: state.auth.isAuthenticated,
    menuState: state.toggleMenu
});

const mapDispatchToProps = dispatch => ({
    setUser: user => dispatch(setUser(user))
});

Main.propTypes = {
    setUser: propTypes.func.isRequired,
    menuState: propTypes.object,
    isAuthenticated: propTypes.bool.isRequired
}

export default connect(mapStateToProps, mapDispatchToProps)(Main);