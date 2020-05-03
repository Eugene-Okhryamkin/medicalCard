import React, { Component } from "react";
import "./AuthMain.sass";
import { connect } from "react-redux";
import { login } from "../../../actions/authAction"
import propTypes from "prop-types";

class AuthMain extends Component {

    state = {
        SNILS: "",
        Password: ""
    }

    onBtnSubmit = e => {
        e.preventDefault();
        const { login } = this.props;
        login(this.state);
    }

    onHandleChange = e => {
        const { id } = e.currentTarget;
        this.setState({ [id]: e.currentTarget.value });
    }

    validate = () => {
        const { SNILS, Password } = this.state;

        if(SNILS && Password) {
            return true;
        }

        return false;
    }

    render() {
        const { SNILS, Password } = this.state;

        return (
            <div id="auth-card-main">
                <div id="auth-inputs">
                    <form action="POST" id="authForm">
                        <input 
                            type="text" 
                            id="SNILS" 
                            name="SNILS" 
                            placeholder="СНИЛС"
                            onChange={this.onHandleChange} 
                            value={SNILS}/>
                        <input 
                            type="Password" 
                            id="Password" 
                            name="Password" 
                            placeholder="Пароль" 
                            onChange={this.onHandleChange}
                            value={Password}/>
                    </form>
                </div>
                <div id="auth-card-main-input_submit">
                    <button
                        id="auth-btn"
                        onClick={this.onBtnSubmit}
                        disabled={!this.validate()}
                    >войти</button>
                </div>
            </div>
        )
    }
}

const mapDispatchToProps = dispatch => ({
    login: userData => dispatch(login(userData))
});

AuthMain.propTypes = {
    login: propTypes.func
}

export default connect(null, mapDispatchToProps)(AuthMain);

