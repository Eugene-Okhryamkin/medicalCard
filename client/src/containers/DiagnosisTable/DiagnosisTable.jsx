import React, { Component } from "react";
import { DiagnosisTableHeader } from "./DiagnosisTableHeader/DiagnosisTableHeader.jsx";
import DiagnosisTableBody from "./DiagnosisTableBody/DiagnosisTableBody.jsx";
import { connect } from "react-redux";
import { getDiagnosis } from "../../actions/getDiagnosis";
import { Preloader } from "../../components/Preloader/Preloader.jsx";
import propTypes from "prop-types";
import "./DiagnosisTable.sass";

class DiagnosisTable extends Component {
    componentDidMount() {
        const { getDiagnosis } = this.props;
        getDiagnosis();
    }

    componentDidUpdate(prevProps) {
        const { selectUser, getDiagnosis, addDiagnosis, deleteDiagnosis } = this.props;
        prevProps.selectUser != selectUser ? getDiagnosis() : selectUser;
        prevProps.addDiagnosis != addDiagnosis ? getDiagnosis() : addDiagnosis;
        prevProps.deleteDiagnosis != deleteDiagnosis ? getDiagnosis() : deleteDiagnosis
    }

    render() {
        const { diagnosis, userRole, isFetching } = this.props;

        if(isFetching) { 
            return <Preloader />
        } else {
            return (
                <table>
                    <DiagnosisTableHeader userRole={ userRole } />    
                    <DiagnosisTableBody diagnosis={ diagnosis } userRole={ userRole } />
                </table>
            )
        }

        
    }
}

const mapStateToProps = state => ({
    diagnosis: state.getDiagnosis.diagnosis,
    userRole: state.auth.user.role,
    selectUser: state.selectUser.selectedUser,
    addDiagnosis: state.addDiagnosis.diagnosis,
    deleteDiagnosis: state.deleteDiagnosis.diagnosis,
    isFetching: state.getDiagnosis.isFetching
})

const mapDispatchToProps = dispatch => ({
    getDiagnosis: () => dispatch(getDiagnosis())
})

DiagnosisTable.propTypes = {
    diagnosis: propTypes.array,
    getDiagnosis: propTypes.func,
    userRole: propTypes.string,
    selectUser: propTypes.string,
    addDiagnosis: propTypes.object,
    deleteDiagnosis: propTypes.string,
    isFetching: propTypes.bool
}

export default connect(mapStateToProps, mapDispatchToProps)(DiagnosisTable);