import React, { Component } from "react";
import { toggleMenu } from "../../actions/toggleMenuAction";
import propTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { connect } from "react-redux";
import "./Header.sass";

class Header extends Component {

    toggle = e => {
        e.preventDefault();
        const { menuState, toggle } = this.props;

        toggle(!menuState.isHidden)
    }

    render() {
        const { menuState, userName } = this.props;

        return (
            <div id="header">
                <div id="header-container">
                    <div id="menu-btn" onClick={this.toggle}>
                        <FontAwesomeIcon icon={faBars} style={!menuState.isHidden ? { color: "#00c3ff" } : { color: "#fff" }} />
                    </div>
                    <div id="top-username">
                        <p>{userName.surname} {userName.name}</p>
                    </div>
                </div>

            </div>
        )
    }
}

const mapStateToProps = state => ({
    userName: state.auth.user,
    menuState: state.toggleMenu
});

const mapDispatchToProps = dispatch => ({
    toggle: isHidden => dispatch(toggleMenu(isHidden))
});

Header.propTypes = {
    menuState: propTypes.object,
    toggle: propTypes.func,
    userName: propTypes.object
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);