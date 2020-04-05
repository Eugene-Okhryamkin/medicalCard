import React, { Component } from "react";
import "./AuthMain.sass";
import sendData from "../../../utils/sendData";

class AuthMain extends Component {

    state = {
        SNILS: "",
        password: "",
    }

    onBtnSubmit = e => {
        e.preventDefault();
        sendData("http://localhost:3000/api/users/login", "POST", { ...this.state });
    }

    onHandleChange = e => {
        const { id } = e.currentTarget;
        this.setState({ [id]: e.currentTarget.value });
    }

    validate = () => {
        const { SNILS, password } = this.state;

        if(SNILS.trim() && password) {
            return true;
        }

        return false;
    }

    render() {
        const { SNILS, password } = this.state;

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
                            type="password" 
                            id="password" 
                            name="password" 
                            placeholder="Пароль" 
                            onChange={this.onHandleChange}
                            value={password}/>
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

export default AuthMain;