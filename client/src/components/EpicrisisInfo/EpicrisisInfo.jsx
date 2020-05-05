import React, { Component } from "react";
import { EpicrisisInfoHeader } from "./EpicrisisInfoHeader/EpicrisisInfoHeader.jsx";
import EpicrisisInfoBody from "./EpicrisisInfoBody/EpicrisisInfoBody.jsx";
import { connect } from "react-redux";
import { getEpicrisis } from "../../actions/getEpicrisisAction";
import propTypes from "prop-types";
import "./EpicrisisInfo.sass";

class EpicrisisInfo extends Component {
    componentDidMount() {
        const { getEpicrisis } = this.props;
        getEpicrisis("/api/epicrisis/concrete");
    }

    render() {
        const { epicrisis } = this.props;
        console.log(epicrisis);
        return (
            <table>
                <EpicrisisInfoHeader />
                <EpicrisisInfoBody epicrisis={ epicrisis } />
            </table>
        )
    }
}

const mapDispatchToProps = dispatch => ({
    getEpicrisis: url => dispatch(getEpicrisis(url))
})

const mapStateToProps = state => ({
    epicrisis: state.getEpicrisis.epicrisis
})

EpicrisisInfo.propTypes = {
    getEpicrisis: propTypes.func,
    epicrisis: propTypes.array
}

export default connect(mapStateToProps, mapDispatchToProps)(EpicrisisInfo);