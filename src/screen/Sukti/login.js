import React, { useState } from 'react';

const Loginform = () => {

    let [fullName, setFullName] = useState({
        fname: '',
        lname: '',
        email: '',
        phone: '',
        password: '',
        confpass: ''
    });
    // let [firstName, setFirstName] = useState('')
    //validation
    const [isError, setsIsError] = useState(true);
    //const [isPassMatch, setPassMatch] = useState(true)
    const [test, setTest] = useState('')

    // eventhandler
    const inputEvent = (e) => {
        let { name, value } = e.target;
        console.log('value ', value, 'name', name);
        setFullName((setValue) => {
            return {
                ...setValue,
                [name]: value,
            }
        });



        if (fullName.fname !== "" && fullName.fname !== undefined) {
            setsIsError(false);
        } else {
            setsIsError(true);
        }

        //    if(fullName.password !== fullName.confpass){
        //     setPassMatch(true);
        //     }else{
        //         setPassMatch(false);
        //     }

        console.log('fullName.fname ', fullName);

    }

    // password validation
    const checkpass = (e) => {
        fullName.confpass = e.target.value;

        console.log(e.target.value);

    };

    function onSubmit(e) {

        e.preventDefault();
    }
    const clickTest = () => {
        setTest('new value')
        console.log(test)
    }


    return (
        <>
            <div className="wrapper">
                <div className="LogoCont">Hello, {fullName.fname} {fullName.lname}</div>
                <p className="logDetails">Enter your login details to access your account.</p>
                <div className="formCont">
                    <form onSubmit={onSubmit}>
                        <ul className="formLyst">
                            <li>
                                <input type="text" name="fname" value={fullName.fname} placeholder="Firstname" onChange={inputEvent} autoComplete='off' />
                            </li>
                            {isError ? <span>Field required</span> : " "}
                            <li>
                                <input type="text" name="lname" value={fullName.lname} placeholder="Lastname" onChange={inputEvent} autoComplete='off' />
                                <span className="subTxt graylText">Optional</span>
                            </li>
                            <li>
                                <input type="email" name="email" value={fullName.email} placeholder="E-mail" onChange={inputEvent} autoComplete='off' />
                            </li>
                            <li>
                                <input type="tel" name="phone" value={fullName.phone} placeholder="Phone" onChange={inputEvent} autoComplete='off' />
                            </li>
                            <li>
                                <input type="password" name="password" value={fullName.password} placeholder="Password" onChange={inputEvent} autoComplete='off' />
                            </li>
                            {/* 
                            <li>
                                <input type="password" name="confpass" value={fullName.confpass} placeholder="Confirm Password" onChange={checkpass} autoComplete='off' />
                            </li> */}
                            <li>
                                <input type="text" name="confpass" value={test} placeholder="Testing" onChange={(e) => setTest(e.target.value)} autoComplete='off' />
                            </li>
                            <button onClick={clickTest}>click</button>
                            {/* {fullName.password !== test || fullName.password === '' || fullName.password == undefined? <span>not matched</span> : <span>matched</span>} */}
                            {(fullName.password !== test && fullName.password !== '' && test !== '') &&
                                <p>not matched</p> 
                            }

                            {(fullName.password === test && fullName.password !== '' && test !== '') &&
                                <p>matched</p>
                            }



                        </ul>

                    </form>

                </div>
                <button type="submit" className="purpelBg fullWidth subBtn"> SUBMIT</button>
            </div>
        </>


    )

}

export default Loginform;