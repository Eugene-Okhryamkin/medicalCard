import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimesCircle } from "@fortawesome/free-solid-svg-icons";
import propTypes from "prop-types";
import { addDocument } from "../../actions/addDocumentForGetExemptionAction";
import { updateDocument } from "../../actions/updateDocumentForGetExemptionAction";
import { connect } from "react-redux";
import "./DocumentEdit.sass";

class DocumentEdit extends Component {
    state = {}

    handleUnmount = () => {
        this.props.close();
    }

    onHandleEdit = e => {
        const { name } = e.currentTarget;
        this.setState({ [name]: e.currentTarget.value });
    }

    onSubmit = e => {
        e.preventDefault();
        const { updateDocument, addDocument } = this.props;
        if(this.props.selectedUser) {
            updateDocument(this.state);
        } else {
            addDocument(this.state);
        }
        
    }

    componentDidMount() {
        this.setState(this.props.selectedUser)
    }

    render() {
        return (
            <section className="edit">
                <div className="edit-main">
                    <div className="mainData-inputs">
                        <input type="text" onChange={this.onHandleEdit} value={this.state.Num || ""} name="Num" placeholder="Номер" required />
                        <input type="text" onChange={this.onHandleEdit} value={this.state.Date || ""} name="Date" placeholder="Дата" required />
                        <input type="text" onChange={this.onHandleEdit} value={this.state.PayedBy || ""} name="PayedBy" placeholder="Кем выдан" required />
                        <input type="text" onChange={this.onHandleEdit} value={this.state.Passport || ""} name="Passport" placeholder="Паспорт" required />
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

const mapDispatchToProps = dispatch => ({
    addDocument: data => dispatch(addDocument(data)),
    updateDocument: data => dispatch(updateDocument(data))
})

const mapStateToProps = state => ({
    selectedUser: state.selectUser.selectedUser
})

DocumentEdit.propTypes = {
    close: propTypes.func,
    addDocument: propTypes.func,
    selectedUser: propTypes.object,
    updateDocument: propTypes.func
}

export default connect(mapStateToProps, mapDispatchToProps)(DocumentEdit);