import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Alert  from "../../components/Alert/Alert.jsx";
import { faTimesCircle } from "@fortawesome/free-solid-svg-icons";
import { connect } from "react-redux";
import { updateUser } from "../../actions/updateUserAction";
import { addUser } from "../../actions/addUserAction";
import propTypes from "prop-types";
import "./Edit.sass";

class Edit extends Component {

    state = {}

    handleUnmount = e => {
        e.preventDefault();
        this.props.close();
    }

    onHandleEdit = e => {
        const { name } = e.currentTarget;
        this.setState({ [name]: e.currentTarget.value });
        console.log(this.state);
    }

    onSubmit = e => {
        e.preventDefault();
        const { updateUser, addUser } = this.props;
        console.log(this.state);
        if(this.props.selectedUser) {
            updateUser(this.state);
        } else {
            addUser(this.state);
        }
        
    }

    componentDidMount() {
        this.setState(this.props.selectedUser)
    }

    render() {
        const { updatedUserMessage, updatedUserError } = this.props;

        return (
            <section id="edit">
                <div id="edit-main">
                    <div id="mainData-inputs">
                        <input type="text" onChange={this.onHandleEdit} value={this.state.OMC || ""} placeholder="OMC" name="OMC" required />
                        <input type="text" onChange={this.onHandleEdit} value={this.state.CodeOfExemption || ""} placeholder="Код льготы" name="CodeOfExemption" required />
                        <input type="text" onChange={this.onHandleEdit} value={this.state.SNILS || ""} placeholder="СНИЛС" name="SNILS" required />
                        <input type="text" onChange={this.onHandleEdit} value={this.state.Surname || ""} placeholder="Фамилия" name="Surname" required />
                        <input type="text" onChange={this.onHandleEdit} value={this.state.MiddleName || ""} placeholder="Отчество" name="MiddleName" required />
                        <input type="text" onChange={this.onHandleEdit} value={this.state.Name || ""} placeholder="Имя" name="Name" required />
                        <input type="text" onChange={this.onHandleEdit} value={this.state.DateOfBirth || ""} placeholder="Дата рождения" name="DateOfBirth" required />
                        <input type="text" onChange={this.onHandleEdit} value={this.state.LiveArea || ""} placeholder="Место жительства Область" name="LiveArea" required />
                        <input type="text" onChange={this.onHandleEdit} value={this.state.LiveRegion || ""} placeholder="Место жительства Район" name="LiveRegion" required />
                        <input type="text" onChange={this.onHandleEdit} value={this.state.LiveSettlement || ""} placeholder="Место жительства Населеннный пункт" name="LiveSettlement" required />
                        <input type="text" onChange={this.onHandleEdit} value={this.state.LiveNeighborhood || ""} placeholder="Место жительства Улица" name="LiveNeighborhood" required />
                        <input type="text" onChange={this.onHandleEdit} value={this.state.LiveHouse || ""} placeholder="Место жительства Дом" name="LiveHouse" required />
                        <input type="text" onChange={this.onHandleEdit} value={this.state.LiveHousing || ""} placeholder="Место жительства Корпус" name="LiveHousing" required />
                        <input type="text" onChange={this.onHandleEdit} value={this.state.LiveAppartment || ""} placeholder="Место жительства Квартира" name="LiveAppartment" required />
                        <input type="text" onChange={this.onHandleEdit} value={this.state.StayArea || ""} placeholder="Место пребывания Область" name="StayArea" required />
                        <input type="text" onChange={this.onHandleEdit} value={this.state.StayRegion || ""} placeholder="Место пребывания Район" name="StayRegion" required />
                        <input type="text" onChange={this.onHandleEdit} value={this.state.StaySettlement || ""} placeholder="Место пребывания Населеннный пункт" name="StaySettlement" required />
                        <input type="text" onChange={this.onHandleEdit} value={this.state.StayNeighborhood || ""} placeholder="Место пребывания Улица" name="StayNeighborhood" required />
                        <input type="text" onChange={this.onHandleEdit} value={this.state.StayHouse || ""} placeholder="Место пребывания Дом" name="StayHouse" required />
                        <input type="text" onChange={this.onHandleEdit} value={this.state.StayHousing || ""} placeholder="Место пребывания Корпус" name="StayHousing" required />
                        <input type="text" onChange={this.onHandleEdit} value={this.state.StayAppartment || ""} placeholder="Место пребывания Квартира" name="StayAppartment" required />
                        <input type="text" onChange={this.onHandleEdit} value={this.state.HomePhoneNumber || ""} placeholder="Домашний телефон" name="HomePhoneNumber" required />
                        <input type="text" onChange={this.onHandleEdit} value={this.state.PlaceOfWork || ""} placeholder="Место работы" name="PlaceOfWork"  required />
                        <input type="text" onChange={this.onHandleEdit} value={this.state.Proffession || ""} placeholder="Профессия" name="Proffession"  required />
                        <input type="text" onChange={this.onHandleEdit} value={this.state.Position || ""} placeholder="Должность" name="Position" required />
                        <input type="text" onChange={this.onHandleEdit} value={this.state.Disability || ""} placeholder="Инвалидность" name="Disability" required />
                        <input type="text" onChange={this.onHandleEdit} value={this.state.Dependant || ""} placeholder="Иждевенец" name="Dependant" required />
                        <input type="text" onChange={this.onHandleEdit} value={this.state.RightToPreferentialService || ""} placeholder="Право на льготное обслуживание" name="RightToPreferentialService" required />
                        <input type="text" onChange={this.onHandleEdit} value={this.state.Passport || ""} placeholder="Паспорт" name="Passport" required />
                        <input type="text" onChange={this.onHandleEdit} value={this.state.Password || ""} placeholder="Пароль" name="Password" required />
                    </div>
                    <div id="specData-inputs">
                        <div className="radioInputs">
                            <label htmlFor="Gender">
                                Мужской
                                <input name="Gender" type="radio" value="Мужской" checked={this.state.Gender == "Мужской" ? true : false} onChange={this.onHandleEdit} />
                            </label>
                            <label htmlFor="Gender">
                                Женский
                                <input name="Gender" type="radio" value="Женский" checked={this.state.Gender == "Женский" ? true : false} onChange={this.onHandleEdit} />
                            </label>
                        </div>
                        <div className="radioInputs">
                            <label htmlFor="Role">
                                Администратор
                                <input name="Role" type="radio" value="Admin" checked={this.state.Role == "Admin" ? true : false } onChange={this.onHandleEdit} />
                            </label>
                            <label htmlFor="Role">
                                Врач
                                <input name="Role" type="radio" value="Doctor" checked={this.state.Role == "Doctor" ? true : false } onChange={this.onHandleEdit} />
                            </label>
                            <label htmlFor="Role">
                                Врач-техник
                                <input name="Role" type="radio" value="TechnikalDoctor" checked={this.state.Role == "TechnikalDoctor" ? true : false } onChange={this.onHandleEdit} />
                            </label>
                            <label htmlFor="Role">
                                Средний мед-персонал
                                <input name="Role" type="radio" value="MiddleMed" checked={this.state.Role == "MiddleMed" ? true : false } onChange={this.onHandleEdit} />
                            </label>
                            <label htmlFor="Role">
                                Пациент
                                <input name="Role" type="radio" value="Pacient" checked={this.state.Role == "Pacient" ? true : false } onChange={this.onHandleEdit} />
                            </label>
                        </div>
                    </div>
                    <div id="submit" >
                        <button id="submit-btn" onClick={ this.onSubmit }>отправить</button>
                    </div>
                    {
                       updatedUserMessage ? <Alert alertMessage={ updatedUserMessage } success={true} /> : (updatedUserError ? <Alert alertMessage={ updatedUserError } success={false} /> : null )
                    }
                </div>
                <div id="close" >
                    <FontAwesomeIcon onClick={this.handleUnmount} icon={faTimesCircle} />
                </div>
            </section>
        )
    }
}

const mapStateToProps = state => ({
    selectedUser: state.selectUser.selectedUser,
    updatedUserMessage: state.updateUser.message,
    updatedUserError: state.updateUser.error
})

const mapDispatchToProps = dispatch => ({
    updateUser: user => dispatch(updateUser(user)),
    addUser: user => dispatch(addUser(user))
})

Edit.propTypes = {
    selectedUser: propTypes.object,
    close: propTypes.func.isRequired,
    updateUser: propTypes.func,
    addUser: propTypes.func,
    updatedUserMessage: propTypes.string,
    updatedUserError: propTypes.string
}

export default connect(mapStateToProps, mapDispatchToProps)(Edit);