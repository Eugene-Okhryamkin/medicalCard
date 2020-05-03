import React, { Component } from "react";
import propTypes from "prop-types";
import { connect } from "react-redux";
import { deleteUser } from "../../../actions/deleteUser";
import { selectUser } from "../../../actions/selectToManageUser";
import "./ArticleTable.sass";

class ArticleTable extends Component {

    onHandleManage = e => {
        e.preventDefault();
        const { selectUser } = this.props;
        selectUser(this.props);
    }

    onHandleDelete = e => {
        e.preventDefault();
        const { deleteUser, id } = this.props;
        deleteUser({id});
    }

    render() {
        const { userRole } = this.props;

        return (
            <tr>
                {
                    userRole == "Admin" ? 
                    <td>
                        <button onClick={this.onHandleManage}>редактировать</button>
                        <button onClick={this.onHandleDelete}>удалить</button>
                    </td> : null
                    
                }
                
                <td>{ this.props.OMC }</td>
                <td>{ this.props.CodeOfExemption }</td>
                <td>{ this.props.SNILS }</td>
                <td>{ this.props.Surname }</td>
                <td>{ this.props.Name }</td>
                <td>{ this.props.MiddleName }</td>
                <td>{ this.props.Gender }</td>
                <td>{ this.props.DateOfBirth }</td>
                <td>{ this.props.LiveArea }</td>
                <td>{ this.props.LiveRegion }</td>
                <td>{ this.props.LiveSettlement }</td>
                <td>{ this.props.LiveNeighborhood }</td>
                <td>{ this.props.LiveHouse }</td>
                <td>{ this.props.LiveHousing }</td>
                <td>{ this.props.LiveAppartment }</td>
                <td>{ this.props.StayArea }</td>
                <td>{ this.props.StayRegion }</td>
                <td>{ this.props.StaySettlement }</td>
                <td>{ this.props.StayNeighborhood }</td>
                <td>{ this.props.StayHouse }</td>
                <td>{ this.props.StayHousing }</td>
                <td>{ this.props.StayAppartment }</td>
                <td>{ this.props.HomePhoneNumber }</td>
                <td>{ this.props.RightToPreferentialService }</td>
                <td>{ this.props.Disability }</td>
                <td>{ this.props.PlaceOfWork }</td>
                <td>{ this.props.Proffession }</td>
                <td>{ this.props.Position }</td>
                <td>{ this.props.Dependant }</td>
                <td>{ this.props.Passport }</td>
            </tr>
        )

    }
}

ArticleTable.propTypes = {
    id: propTypes.number,
    OMC: propTypes.string,
    CodeOfExemption: propTypes.string,
    SNILS: propTypes.string,
    Surname: propTypes.string,
    Name: propTypes.string,
    MiddleName: propTypes.string,
    Gender: propTypes.string,
    DateOfBirth: propTypes.string,
    LiveArea: propTypes.string,
    LiveRegion: propTypes.string,
    LiveSettlement: propTypes.string,
    LiveNeighborhood: propTypes.string,
    LiveHouse: propTypes.string,
    LiveHousing: propTypes.string,
    LiveAppartment: propTypes.string,
    StayArea: propTypes.string,
    StayRegion: propTypes.string,
    StaySettlement: propTypes.string,
    StayNeighborhood: propTypes.string,
    StayHouse: propTypes.string,
    StayHousing: propTypes.string,
    StayAppartment: propTypes.string,
    HomePhoneNumber: propTypes.string,
    RightToPreferentialService: propTypes.string,
    Disability: propTypes.string,
    PlaceOfWork: propTypes.string,
    Proffession: propTypes.string,
    Position: propTypes.string,
    Dependant: propTypes.string,
    Passport: propTypes.string,
    deleteUser: propTypes.func,
    selectUser: propTypes.func,
    userRole: propTypes.string
}

const mapStateToProps = state => ({
    userRole: state.auth.user.role 
})

const mapDispatchToProps = dispatch => ({
    deleteUser: userID => dispatch(deleteUser(userID)),
    selectUser: user => dispatch(selectUser(user))
});

export default connect(mapStateToProps, mapDispatchToProps)(ArticleTable);