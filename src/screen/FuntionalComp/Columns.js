import React, { useState } from 'react';

const Columns = (props) => {
    let [name, setName] = useState('Subhajit');

    return (
            <td>{props.tvalue}</td>
    )
}

export default Columns;