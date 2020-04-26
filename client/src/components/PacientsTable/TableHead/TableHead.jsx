import React from "react";
import propTypes from "prop-types";
import "./TableHead.sass";

export const TableHead = props => (
    <thead>
        <tr>
            { props.role == "Doctor" ? null : <th>Управление</th>}
            <th>OMC</th>
            <th>Код льготы</th>
            <th>СНИЛС</th>
            <th>Фамилия</th>
            <th>Имя</th>
            <th>Отчество</th>
            <th>Пол</th>
            <th>Дата рождения</th>
            <th>Место жительства Область</th>
            <th>Место жительства Район</th>
            <th>Место жительства Населеннный пункт</th>
            <th>Место жительства Улица</th>
            <th>Место жительства Дом</th>
            <th>Место жительства Корпус</th>
            <th>Место жительства Квартира</th>
            <th>Место пребывания Область</th>
            <th>Место пребывания Район</th>
            <th>Место пребывания Населеннный пункт</th>
            <th>Место пребывания Улица</th>
            <th>Место пребывания Дом</th>
            <th>Место пребывания Корпус</th>
            <th>Место пребывания Квартира</th>
            <th>Домашний телефон</th>
            <th>Право на льготное обслуживание</th>
            <th>Инвалидность</th>
            <th>Место работы</th>
            <th>Профессия</th>
            <th>Должность</th>
            <th>Иждевенец</th>
            <th>Паспорт</th>
        </tr>
    </thead>
)

TableHead.propTypes = {
    role: propTypes.string
}