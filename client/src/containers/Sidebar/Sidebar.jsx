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
            <aside className={!menuState.isHidden ? "sidebar_active" : "sidebar"} >
                <a href="#" id="menu-btn"></a>
                <nav id="menu-list">
                    <ul>
                        <li>
                            <NavLink to={"/"} className="ListItem" >Главная страница</NavLink>
                        </li>
                        <li>
                            <NavLink to={"/pacients"} className="ListItem" >Пациенты</NavLink>
                        </li>
                        <li>
                            <NavLink to={"/epicrisis"} className="ListItem" >Эпикризы</NavLink>
                        </li>
                        <li>
                            <a href="#" onClick={this.logout} className="ListItem" >Выход</a>
                        </li>
                    </ul>
                </nav>
            </aside>
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