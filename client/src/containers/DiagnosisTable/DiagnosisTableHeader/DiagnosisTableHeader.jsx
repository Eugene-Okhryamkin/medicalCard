import React from "react";
import propTypes from "prop-types";
import "./DiagnosisTableHeader.sass";

export const DiagnosisTableHeader = props => (
    <thead>
        <tr>
            {
                props.userRole == "Admin" ? <th>Управление</th> : null
            }
            <th>Дата</th>
            <th>Код болезни</th>
            <th>Владелец</th>
            <th>Врач</th>
        </tr>
    </thead>
)

DiagnosisTableHeader.propTypes = {
    userRole: propTypes.string
}