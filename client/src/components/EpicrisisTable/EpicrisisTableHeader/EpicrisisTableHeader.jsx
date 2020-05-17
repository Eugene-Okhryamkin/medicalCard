import React from "react";
import propTypes from "prop-types";
import { connect } from "react-redux";
import "./EpicrisisTableHeader.sass";

export const EpicrisisTableHeader = props => (
    <thead>
        <tr>
            <th>Скачать</th>
            { props.role == "Admin" ? <th>Удалить</th> : null }
            <th>Дата</th>
            <th>Фамилия</th>
            <th>Имя</th>
            <th>Отчество</th>
            <th>Врач</th>
        </tr>
    </thead>
);

const mapStateToProps = state => ({
    role: state.auth.user.role
})

EpicrisisTableHeader.propTypes = {
    role: propTypes.string
}

export default connect(mapStateToProps, null)(EpicrisisTableHeader)