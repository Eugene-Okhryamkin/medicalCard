import React from "react";
import propTypes from "prop-types";
import "./Alert.sass";

const styleSuccess = {
    border: "1px solid green",
    background: "rgba(84, 219, 75, .5)"
}

const styleError = {
    border: "1px solid red",
    background: "rgba(255, 64, 64, .5)"
}

const Alert = props => (
    <div className="alert" style={  props.success == true ? styleSuccess : styleError } >
        <p id="alert-message">{ props.alertMessage }</p>
    </div>
);
    
Alert.propTypes = {
    alertMessage: propTypes.string.isRequired,
    success: propTypes.bool.isRequired
};

export default Alert;