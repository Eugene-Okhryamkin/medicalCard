import React, { Component } from "react";
import { connect } from "react-redux";
import propTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimesCircle } from "@fortawesome/free-solid-svg-icons";
import { addDiagnosis } from "../../actions/addDiagnosis";
import { updateDiagnosis } from "../../actions/updateDiagnosis";
import "./DiagnosisEdit.sass";


class DiagnosisEdit extends Component {
    state = {
        Diagnosis: {}
    }

    handleUnmount = () => {
        this.props.close();
    }

    onHandleEdit = e => {
        const { name } = e.currentTarget;
        
        this.setState({
            ...this.state,
            [name]: e.target.value,
            Diagnosis: {
                ...this.state.Diagnosis,
                [name]: e.target.value
            }
        })
    }

    onSubmit = e => {
        e.preventDefault();
        const { addDiagnosis, updateDiagnosis } = this.props;
        if(this.props.selectedUser) {
            updateDiagnosis(this.state);
        } else {
            addDiagnosis(this.state);
        }
        
    }

    componentWillMount() {
        this.setState(this.props.selectedUser);
    }


    render() {
        console.log(this.state);
            return (
                <section className="edit">
                    <div className="edit-main">
                        <div className="mainData-inputs">
                            <input type="text" onChange={this.onHandleEdit} value={this.state.Diagnosis.Date || ""} name="Date" placeholder="Дата" required />
                            <input type="text" onChange={this.onHandleEdit} value={this.state.Diagnosis.codeOfSic || ""} name="codeOfSic" placeholder="Код болезни" required />
                            <input type="text" onChange={this.onHandleEdit} value={this.state.Passport || ""} name="Passport" placeholder="Паспорт владельца" required />
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
    addDiagnosis: data => dispatch(addDiagnosis(data)),
    updateDiagnosis: data => dispatch(updateDiagnosis(data))
})

const mapStateToProps = state => ({
    selectedUser: state.selectUser.selectedUser
})

DiagnosisEdit.propTypes = {
    close: propTypes.func,
    addDiagnosis: propTypes.func,
    selectedUser: propTypes.object,
    updateDiagnosis: propTypes.func
}

export default connect(mapStateToProps, mapDispatchToProps)(DiagnosisEdit);