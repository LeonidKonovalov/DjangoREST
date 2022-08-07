import React from 'react'


const MenuList = ({menu}) => {
    return (
        <tr>
            <td>{menu.first_item}</td>
            <td>{menu.second_item}</td>
        </tr>
    )
}


export default MenuList
