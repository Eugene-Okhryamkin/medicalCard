import React, { Component } from "react";
import { AnalisysTableHeader } from "./AnalisysTableHeader/AnalisysTableHeader.jsx";
import AnalisysTableBody from "./AnalisysTableBody/AnalisysTableBody.jsx";
import { connect } from "react-redux";
import { Preloader } from "../../components/Preloader/Preloader.jsx";
import "./AnalisysTable.sass";
import propTypes from "prop-types";

class AnalisysTable extends Component {
    render() {
        const { data, userRole, deleteData, isFetching } = this.props;

        if(isFetching) {
            return <Preloader />
        } else {
            return (
                <table>
                    <AnalisysTableHeader userRole={ userRole } />
                    <AnalisysTableBody data={ data } userRole={ userRole } deleteData={data => deleteData(data)} url={this.props.url} />
                </table>
            )
        }
    }
}

const mapStateToProps = state => ({
    userRole: state.auth.user.role,
    isFetching: state.getAnalisys.isFetching
})

AnalisysTable.propTypes = {
    data: propTypes.array,
    userRole: propTypes.string,
    deleteData: propTypes.func,
    url: propTypes.string,
    isFetching: propTypes.bool
}

export default connect(mapStateToProps, null)(AnalisysTable);