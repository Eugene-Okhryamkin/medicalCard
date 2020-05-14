import React, { Component } from "react";
import DiagnosisTable from "../../containers/DiagnosisTable/DiagnosisTable.jsx";
import { connect } from "react-redux";
import Search from "../../components/Search/Search.jsx";
import { getDiagnosis } from "../../actions/getDiagnosis";
import { selectUser } from "../../actions/selectToManageUser";
import DiagnosisEdit from "../DiagnosisEdit/DiagnosisEdit.jsx";
import propTypes from "prop-types";
import Alert from "../../components/Alert/Alert.jsx";
import "./Diagnosis.sass";

class Diagnosis extends Component {
    state = {
        editIsOpen: false
    }

    componentDidUpdate(prevProps) {
        const { diagnosis } = this.props;
        prevProps.diagnosis != diagnosis ? getDiagnosis("/api/exemption/get") : diagnosis
    }

    render() {
        const { editIsOpen } = this.state;
        const { selectedUser, selectUser, error } = this.props;

        if (error.length) {
            return <Alert alertMessage={error} success={false} />
        } else {
            return (
                <section id="Diagnosis">
                    <Search />
                    <div className="table-wrap">
                        <DiagnosisTable />
                        {selectedUser != null ? <DiagnosisEdit close={() => selectUser(null)} /> : null}
                        {editIsOpen ? <DiagnosisEdit close={() => this.setState({ editIsOpen: false })} /> : null}
                    </div>
                    <div className="add-btn-wrap">
                        <button className="add-btn" onClick={() => this.setState({ editIsOpen: true })}>добавить</button>
                    </div>
                </section>
            )

        }
    }
}

const mapStateToProps = state => ({
    selectedUser: state.selectUser.selectedUser,
    diagnosis: state.getDiagnosis.diagnosis,
    error: state.getUsers.error,
});

const mapDispatchToProps = dispatch => ({
    getDiagnosis: () => dispatch(getDiagnosis()),
    selectUser: user => dispatch(selectUser(user))
})

Diagnosis.propTypes = {
    selectedUser: propTypes.object,
    diagnosis: propTypes.array,
    getDiagnosis: propTypes.func,
    selectUser: propTypes.func,
    error: propTypes.string
}

export default connect(mapStateToProps, mapDispatchToProps)(Diagnosis);