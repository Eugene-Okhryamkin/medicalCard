import React, { Component } from "react";
import propTypes from "prop-types";
import { EpicrisisTableHeader } from "./EpicrisisTableHeader/EpicrisisTableHeader.jsx";
import EpicrisisTableBody  from "./EpicrisisTableBody/EpicrisisTableBody.jsx";
import { connect } from "react-redux";
import { Preloader } from "../../components/Preloader/Preloader.jsx";
import "./EpicrisisTable.sass";
import { getEpicrisis } from "../../actions/getEpicrisisAction.js";

class EpicrisisTable extends Component {

    componentDidMount() {
        const { getEpicrisis } = this.props;
        getEpicrisis("/api/epicrisis/get");
    }

    componentDidUpdate(prevProps) {
        const { getEpicrisis, uploadEpicrisis } = this.props;
        prevProps.uploadEpicrisis != uploadEpicrisis ? getEpicrisis("/api/epicrisis/get") : uploadEpicrisis
    }

    render() {
        const { epicrisis, isFetching } = this.props;

        if(isFetching) {
            return <Preloader />
        } else {
            return (
                <div className="table-wrap">
                    <table>
                        <EpicrisisTableHeader /> 
                        <EpicrisisTableBody epicrisisData={ epicrisis } />   
                    </table>
                </div>
            )
        }
    }
}

const mapStateToProps = state => ({
    epicrisis: state.getEpicrisis.epicrisis,
    uploadEpicrisis: state.uploadEpicrisis.epicrisis,
    isFetching: state.getEpicrisis.isFetching
});

const mapDispatchToProps = dispatch => ({
    getEpicrisis: url => dispatch(getEpicrisis(url))
});

EpicrisisTable.propTypes = {
    epicrisis: propTypes.array,
    isFetching: propTypes.bool,
    getEpicrisis: propTypes.func,
    uploadEpicrisis: propTypes.object
}

export default connect(mapStateToProps, mapDispatchToProps)(EpicrisisTable);