import React, { Component } from "react";
import { getDocuments } from "../../actions/getDocumentForGetExemptionAction";
import { connect } from "react-redux";
import propTypes from "prop-types";
import "./ExemptionInfo.sass";

class ExemptionInfo extends Component {

    componentDidMount() {
        const { getDocument } = this.props;
        getDocument("/api/exemptions/concrete")
    }

    renderData = () => {
        const { documents } = this.props;
        let template = null;

        if(documents.length) {
            template = documents.map(item => {
                return (
                    <tr key={ item.idDocumentForGetExemption }>
                        <td>{ item.Num }</td>
                        <td>{ item.Date }</td>
                        <td>{ item.PayedBy }</td>
                        <td>{ item.User.Surname } { item.User.MiddleName } { item.User.Name }</td>
                    </tr>
                )
            })

            return template;
        }
    }

    render() {
        
        return (
            <table>
                <thead>
                    <tr>
                        <th>Номер</th>
                        <th>Дата</th>
                        <th>Кем выдан</th>
                        <th>Владелец</th>
                    </tr>
                </thead>
                <tbody>
                    { this.renderData() }
                </tbody>
            </table>
        )
    }
}

const mapStateToProps = state => ({
    documents: state.getDocuments.documents
})

const mapDispatchToProps = dispatch => ({
    getDocument: url => dispatch(getDocuments(url))
})

ExemptionInfo.propTypes = {
    documents: propTypes.array,
    getDocument: propTypes.func
}

export default connect(mapStateToProps, mapDispatchToProps)(ExemptionInfo);