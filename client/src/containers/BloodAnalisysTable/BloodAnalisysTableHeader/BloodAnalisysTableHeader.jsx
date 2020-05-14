import React from "react";
import propTypes from "prop-types";
import "./BloodAnalisysTableHeader.sass";

export const BloodAnalisysTableHeader = props => (
    <thead>
        <tr>
            {
                props.userRole == "Admin" ? <th>Управление</th> : null
            }
            <th>Дата</th>
            <th>Код</th>
            <th>Группа</th>
            <th>Резус</th>
            <th>Владелец</th>
            <th>Врач</th>
        </tr>
    </thead>
)

BloodAnalisysTableHeader.propTypes = {
    userRole: propTypes.string
}