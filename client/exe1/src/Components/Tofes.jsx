import React, { useRef, useState } from 'react';
const Tofes = () => {
    const [firstName, setFirstName] = useState('')
    const [str, setStr] = useState('')
    const lastName = useRef('')
    const age= useRef('')
    const adress = useRef('')
    const saves=()=>{
setStr("hello"+" "+firstName+" "+"you entered to the scujel:)")
setFirstName('')
        // lastName.current('')
        // age.current('')
        // adress.current('')
    }

    return (
        <>
        <h5>Tofes</h5>
            <input
                type="text"
                onChange={(e) => (setFirstName(e.target.value))}
                placeholder="enter firstName"
            />
            <p>{firstName}</p>
            {/* <input placeholder="enter lastName" ref={lastName}/>
            <br/>
            <input placeholder="enter age" ref={age}/>
            <br/>
            <input placeholder="enter adress" ref={adress}/>
            <br/> */}
            <button onClick={saves}>save</button>
            <div>{str}</div>
           
        </>)
}
export default Tofes;
