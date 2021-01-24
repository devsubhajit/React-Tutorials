import React, { useState } from 'react';
import Columns from './Columns';
import ColorSelector from 'react-color-selector';
// hooks

// function StateLess (){
//     return(
//         <div>
//             State less
//         </div>
//     )
// }
const StateLess = (props) => {
    let [name, setName] = useState('Subhajit');
    let [tavlues, seTvalues] = useState(['A', 'B', 'C']);

    let [myColor, pickedColor] = useState('');
    let picker_data = {
        col: 12,
        row: 12,
        width: 300,
        height: 250,
        view: 'both',
        theme: 'light',
        title: 'COLORS',
        cellControl: 4
    }

    const changeName = (v = 'Vasudha') => {
        console.log(v)
        setName(name = v)
    }
    const changeName2 = () => {
        setName(name = 'Suktisama')
    }
    console.log('props', props)
    return (
        <React.Fragment>
            <div>
                State less {name}
                {/* <button type="button" onClick={changeName()}>Click me</button> */}
                <button type="button" onClick={() => setName(name = 'Sukti')}>Click me inline</button>
                <button type="button" onClick={changeName2}>Click without parenthesis </button>
                <button type="button" onClick={() => changeName()}>Click with value</button>
                <button type="button" onClick={() => changeName('Raja')}>Click with value</button>
            </div>
            <h1>Hello </h1>
            <table>
                <tbody>
                    <tr>
                        {tavlues.map((item, index) => {
                            return <React.Fragment key={index}>
                                <Columns tvalue={item} />
                            </React.Fragment>
                        })}

                    </tr>
                </tbody>
            </table>

            <br />
            <ColorSelector pallet={picker_data} selectedColor={pickedColor} />
            <p>{myColor}</p>
        </React.Fragment>
    )
}

export default StateLess;