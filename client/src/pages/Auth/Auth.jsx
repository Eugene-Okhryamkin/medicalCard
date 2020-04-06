import React, { Component } from "react";
import "./Auth.sass";
import AuthHeader from "../../components/Auth/AuthHeader/AuthHeader.jsx";
import AuthMain from "../../components/Auth/AuthMain/AuthMain.jsx";
// import Alert from "../../components/Alert/Alert.jsx";


class Auth extends Component {
    render() {
        return (
            <div id="auth">
                <div id="auth-card">
                    <AuthHeader />
                    <AuthMain />
                </div>  
                {/* <Alert alertMessage="Сообщение" /> */}
            </div>
        )
    }
}

export default Auth