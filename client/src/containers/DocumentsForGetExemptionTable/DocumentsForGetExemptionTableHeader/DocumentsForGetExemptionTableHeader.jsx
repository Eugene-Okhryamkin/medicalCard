import React from "react";
import propTypes from "prop-types";
import "./DocumentsForGetExemptionTableHeader.sass";

export const DocumentsForGetExemptionTableHeader = props => (
    <thead>
        <tr>
            {
                props.userRole == "Admin" ? <th>Управление</th> : null
            }
            <th>Номер</th>
            <th>Дата</th>
            <th>Кем выдан</th>
            <th>Владелец</th>
        </tr>
    </thead>
)

DocumentsForGetExemptionTableHeader.propTypes = {
    userRole: propTypes.string
}