import React, { Component } from "react";
import propTypes from "prop-types";
import "./MainInfo.sass";

class MainInfo extends Component {
    render() {
        const { userInfo } = this.props;
        console.log(userInfo);
        return (
            <div id="main-info">
                <table>
                    <tbody>
                        <tr>
                            <td>Фамилия: </td>
                            <td>{userInfo.surname}</td>
                        </tr>
                        <tr>
                            <td>Имя: </td>
                            <td>{userInfo.name}</td>
                        </tr>
                        <tr>
                            <td>Отчество: </td>
                            <td>{userInfo.middlename}</td>
                        </tr>
                        <tr>
                            <td>ОМС: </td>
                            <td>{userInfo.OMC}</td>
                        </tr>
                        <tr>
                            <td>Код льготы: </td>
                            <td>{userInfo.CodeOfExemption}</td>
                        </tr>
                        <tr>
                            <td>СНИЛС: </td>
                            <td>{userInfo.SNILS}</td>
                        </tr>
                        <tr>
                            <td>Дата рождения: </td>
                            <td>{userInfo.DateOfBirth}</td>
                        </tr>
                        <tr>
                            <td>Место жительства(Область): </td>
                            <td>{userInfo.LiveArea}</td>
                        </tr>
                        <tr>
                            <td>Место жительства(Регион): </td>
                            <td>{userInfo.LiveRegion}</td>
                        </tr>
                        <tr>
                            <td>Место жительства(Населенный пункт): </td>
                            <td>{userInfo.LiveSettlement}</td>
                        </tr>
                        <tr>
                            <td>Место жительства(Улица): </td>
                            <td>{userInfo.LiveNeighborhood}</td>
                        </tr>
                        <tr>
                            <td>Место жительства(Дом): </td>
                            <td>{userInfo.LiveHouse}</td>
                        </tr>
                        <tr>
                            <td>Место жительства(Корпус): </td>
                            <td>{userInfo.LiveHousing}</td>
                        </tr>
                        <tr>
                            <td>Место жительства(Квартира): </td>
                            <td>{userInfo.LiveAppartment}</td>
                        </tr>
                        <tr>
                            <td>Место пребывания(Область): </td>
                            <td>{userInfo.StayArea}</td>
                        </tr>
                        <tr>
                            <td>Место пребывания(Регион): </td>
                            <td>{userInfo.StayRegion}</td>
                        </tr>
                        <tr>
                            <td>Место пребывания(Населенный пункт): </td>
                            <td>{userInfo.StaySettlement}</td>
                        </tr>
                        <tr>
                            <td>Место пребывания(Улица): </td>
                            <td>{userInfo.StayNeighborhood}</td>
                        </tr>
                        <tr>
                            <td>Место пребывания(Дом): </td>
                            <td>{userInfo.StayHouse}</td>
                        </tr>
                        <tr>
                            <td>Место пребывания(Корпус): </td>
                            <td>{userInfo.StayHousing}</td>
                        </tr>
                        <tr>
                            <td>Место пребывания(Квартира): </td>
                            <td>{userInfo.StayAppartment}</td>
                        </tr>
                        <tr>
                            <td>Телефон: </td>
                            <td>{userInfo.HomePhoneNumber}</td>
                        </tr>
                        <tr>
                            <td>Право на льготное обслуживание: </td>
                            <td>{userInfo.RightToPreferentialService}</td>
                        </tr>
                        <tr>
                            <td>Инвалидность: </td>
                            <td>{userInfo.Disability}</td>
                        </tr>
                        <tr>
                            <td>Место работы: </td>
                            <td>{userInfo.PlaceOfWork}</td>
                        </tr>
                        <tr>
                            <td>Профессия: </td>
                            <td>{userInfo.Proffession}</td>
                        </tr>
                        <tr>
                            <td>Должность: </td>
                            <td>{userInfo.Position}</td>
                        </tr>
                        <tr>
                            <td>Иждевенец: </td>
                            <td>{userInfo.Dependant}</td>
                        </tr>
                        <tr>
                            <td>Паспорт: </td>
                            <td>{userInfo.Passport}</td>
                        </tr>
                        <tr>
                            <td>Пол: </td>
                            <td>{userInfo.Gender}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        )
    }
}

MainInfo.propTypes = {
    userInfo: propTypes.object
}

export default MainInfo