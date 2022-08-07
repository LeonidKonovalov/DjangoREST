import React from 'react'


const FooterList = ({footer}) => {
    return (
        <tr>
            <td>{footer.first_item}</td>
            <td>{footer.second_item}</td>
        </tr>
    )
}


export default FooterList
