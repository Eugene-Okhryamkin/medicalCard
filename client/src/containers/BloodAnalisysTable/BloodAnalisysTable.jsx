import React, { Component } from "react";
import { connect } from "react-redux";
import propTypes from "prop-types";
import { BloodAnalisysTableHeader } from "./BloodAnalisysTableHeader/BloodAnalisysTableHeader.jsx";
import BloodAnalisysTableBody from "./BloodAnalisysTableBody/BloodAnalisysTableBody.jsx";
import "./BloodAnalisysTable.sass";

class BloodAnalisysTable extends Component {
    render() {
        const { userRole, data, url, deleteData } = this.props;

        return (
            <table>
                <BloodAnalisysTableHeader userRole={ userRole } />   
                <BloodAnalisysTableBody data={ data } userRole={ userRole } deleteData={data => deleteData(data)} url={ url } />
            </table>
        )
    }
}

const mapStateToProps = state => ({
    userRole: state.auth.user.role
})

BloodAnalisysTable.propTypes = {
    userRole: propTypes.string,
    data: propTypes.array,
    url: propTypes.string,
    deleteData: propTypes.func
}

export default connect(mapStateToProps, null)(BloodAnalisysTable)