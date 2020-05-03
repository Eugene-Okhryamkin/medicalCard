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
        const { username, menuState } = this.props;

        if(username != null) {
            return (
                <header id={!menuState.isHidden ? "header_active" : "header"} >
                    <div id="header-container">
                        <div id="menu-btn" onClick={ this.toggle }>
                            <FontAwesomeIcon icon={ faBars } />
                        </div>
                        <div id="top-username">
                            <p>{ username.surname } { username.name }</p>
                        </div>
                    </div>
                </header>
            )
        } else {
            return (
                null
            )
        }
    }
}

const mapStateToProps = state => ({
    username: state.auth.user,
    menuState: state.toggleMenu
});

const mapDispatchToProps = dispatch => ({
    toggle: isHidden => dispatch(toggleMenu(isHidden))
});

Header.propTypes = {
    menuState: propTypes.object,
    toggle: propTypes.func,
    username: propTypes.object
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);