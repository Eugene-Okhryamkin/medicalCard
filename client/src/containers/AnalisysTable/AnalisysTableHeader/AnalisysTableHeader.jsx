import React from "react";
import propTypes from "prop-types";
import "./AnalisysTableHeader.sass";

export const AnalisysTableHeader = props => (
    <thead>
        <tr>
            {
                props.userRole == "Admin" ? <th>Управление</th> : null
            }
            <th>Дата</th>
            <th>Код</th>
            <th>Владелец</th>
            <th>Врач</th>
        </tr>
    </thead>
)

AnalisysTableHeader.propTypes = {
    userRole: propTypes.string
}