import { render } from '@testing-library/react';
import React from 'react';

// function StateLess (){
//     return(
//         <div>
//             State less
//         </div>
//     )
// }
const StateLess = (props) =>{
    let name = "Subhajit";
    return(
        <div>
            State less {name}
        </div>
    )
}

export default StateLess;