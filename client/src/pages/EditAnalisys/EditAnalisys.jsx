import React, { Component } from "react";
import propTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { connect } from "react-redux"; 
import { faTimesCircle } from "@fortawesome/free-solid-svg-icons";
import "./EditAnalisys.sass";

class EditAnalisys extends Component {
    state = {
        analisy: {}
    }

    handleUnmount = () => {
        this.props.close();
    }

    onHandleEdit = e => {
        const { name } = e.currentTarget;
        
        this.setState({
            ...this.state,
            [name]: e.target.value,
            analisy: {
                ...this.state.analisy,
                [name]: e.target.value
            }
        })
    }

    onSubmit = e => {
        e.preventDefault();
        const { send, update } = this.props;

        if(this.props.selectedUser) {
            update(this.state)
        } else {
            send(this.state);
        }
    }

    componentWillMount() {
        this.setState(this.props.selectedUser);
    }


    render() {
        return (
            <section className="edit">
                <div className="edit-main">
                    <div className="mainData-inputs">
                        <input type="text" onChange={this.onHandleEdit} value={this.state.analisy.Date || ""} placeholder="Дата" name="Date" required />
                        <input type="text" onChange={this.onHandleEdit} value={this.state.analisy.Code || ""} placeholder="Код" name="Code" required />
                        <input type="text" onChange={this.onHandleEdit} value={this.state.Passport || ""} placeholder="Паспорт пациента" name="Passport" required />
                    </div>
                    <div id="submit" >
                        <button id="submit-btn" onClick={ this.onSubmit }>отправить</button>
                    </div>
                </div>
                <div id="close" >
                    <FontAwesomeIcon onClick={this.handleUnmount} icon={faTimesCircle} />
                </div>
            </section>
        )
    }
}

const mapStateToProps = state => ({
    selectedUser: state.selectUser.selectedUser
})

EditAnalisys.propTypes = {
    close: propTypes.func,
    update: propTypes.func,
    send: propTypes.func,
    selectedUser: propTypes.object
}

export default connect(mapStateToProps, null)(EditAnalisys);