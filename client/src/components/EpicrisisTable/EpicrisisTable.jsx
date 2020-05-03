import React, { Component } from "react";
import propTypes from "prop-types";
import { EpicrisisTableHeader } from "./EpicrisisTableHeader/EpicrisisTableHeader.jsx";
import EpicrisisTableBody  from "./EpicrisisTableBody/EpicrisisTableBody.jsx";
import { connect } from "react-redux";
import "./EpicrisisTable.sass";
import { getEpicrisis } from "../../actions/getEpicrisisAction.js";

class EpicrisisTable extends Component {

    componentDidMount() {
        const { getEpicrisis } = this.props;
        getEpicrisis("/api/epicrisis/get");
    }

    render() {
        const { epicrisis } = this.props;

        return (
            <div id="epicrisis-table">
                <table>
                    <EpicrisisTableHeader /> 
                    <EpicrisisTableBody epicrisisData={ epicrisis } />   
                </table>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    epicrisis: state.getEpicrisis.epicrisis
});

const mapDispatchToProps = dispatch => ({
    getEpicrisis: url => dispatch(getEpicrisis(url))
});

EpicrisisTable.propTypes = {
    epicrisis: propTypes.array,
    getEpicrisis: propTypes.func
}

export default connect(mapStateToProps, mapDispatchToProps)(EpicrisisTable);