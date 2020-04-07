import React, { Component } from "react";
import "./AuthMain.sass";
import { connect } from "react-redux";
import { handleLogin } from "../../../actions/handleLoginAction";
import propTypes from "prop-types";

class AuthMain extends Component {

    state = {
        SNILS: "",
        Password: ""
    }

    onBtnSubmit = e => {
        e.preventDefault();
        const { handleLoginAction } = this.props;
        handleLoginAction(this.state);
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
                    <form action="POST">
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
                        onClick={this.onBtnSubmit}
                        disabled={!this.validate()}
                    >войти</button>
                </div>
            </div>
        )
    }
}

const mapDispatchToProps = dispatch => ({
    handleLoginAction: user => dispatch(handleLogin(user))
});

AuthMain.propTypes = {
    handleLoginAction: propTypes.func.isRequired
}

export default connect(null, mapDispatchToProps)(AuthMain);

