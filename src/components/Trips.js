import React from 'react'

const Trips = ({date, place, type}) => {
    return (
        <tr>
        <td>
            {date}
        </td>
        <td>
            {place}
        </td>
        <td>
            {type}
        </td>
    </tr>	
    )
}

export default Trips
