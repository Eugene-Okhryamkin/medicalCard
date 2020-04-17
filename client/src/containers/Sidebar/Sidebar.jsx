import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";
import { logout } from "./../../actions/logoutAction";
import propTypes from "prop-types";
import "./Sidebar.sass";


class Sidebar extends Component {

    logout = e => {
        e.preventDefault();
        localStorage.removeItem("authData");
        this.props.logoutUser();
    }

    render() {
        const { menuState } = this.props;


        return (
            <div id="sidebar" style={ !menuState.isHidden ? {  width: "25%" } : {  width: "0%" }}>
                <nav style={ !menuState.isHidden ? {  opacity: "1" } : { opacity: "0" }}>
                    <ul>
                        <li><NavLink to={"/"}>Главная страница</NavLink></li>
                        <li><NavLink to={"/pacients"}>Пациенты</NavLink></li>
                        <li><a href="#">navLink</a></li>
                        <li><a href="#">navLink</a></li>
                        <li><a href="#">navLink</a></li>
                        <li><a href="#">navLink</a></li>
                        <li><a href="#" onClick={this.logout}>Выход</a></li>
                    </ul>
                </nav>
            </div>
        )
    }
}


const mapStateToProps = state => ({
    menuState: state.toggleMenu 
});

const mapDispatchToProps = dispatch => ({
    logoutUser: () => dispatch(logout())
});

Sidebar.propTypes = {
    menuState: propTypes.object.isRequired,
    logoutUser: propTypes.func.isRequired
}

export default connect(mapStateToProps, mapDispatchToProps)(Sidebar);