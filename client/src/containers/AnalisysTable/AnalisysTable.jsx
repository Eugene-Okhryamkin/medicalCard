import React, { Component } from "react";
import { AnalisysTableHeader } from "./AnalisysTableHeader/AnalisysTableHeader.jsx";
import AnalisysTableBody from "./AnalisysTableBody/AnalisysTableBody.jsx";
import { connect } from "react-redux";
import "./AnalisysTable.sass";
import propTypes from "prop-types";

class AnalisysTable extends Component {
    render() {
        const { data, userRole, deleteData } = this.props;

        return (
            <table>
                <AnalisysTableHeader userRole={ userRole } />
                <AnalisysTableBody data={ data } userRole={ userRole } deleteData={data => deleteData(data)} url={this.props.url} />
            </table>
        )
    }
}

const mapStateToProps = state => ({
    userRole: state.auth.user.role
})

AnalisysTable.propTypes = {
    data: propTypes.array,
    userRole: propTypes.string,
    deleteData: propTypes.func,
    url: propTypes.string
}

export default connect(mapStateToProps, null)(AnalisysTable);