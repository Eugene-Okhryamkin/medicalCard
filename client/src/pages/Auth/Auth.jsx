import React, { Component } from "react";
import "./Auth.sass";
import AuthHeader from "../../components/Auth/AuthHeader/AuthHeader.jsx";
import AuthMain from "../../components/Auth/AuthMain/AuthMain.jsx";
import Alert from "../../components/Alert/Alert.jsx";
import propTypes from "prop-types";
import { connect } from "react-redux";

class Auth extends Component {

    render() {
        const { error } = this.props;

        return (
            <div id="auth">
                <div id="auth-card">
                    <AuthHeader />
                    <AuthMain />
                </div>  
                {
                    error != "" ? <Alert alertMessage={ error } /> : ""
                }
                
            </div>
        )
    }
}

const mapStateToProps = state => ({
    error: state.getUser.error
});

Auth.propTypes = {
    error: propTypes.string
}

export default connect(mapStateToProps, null)(Auth);