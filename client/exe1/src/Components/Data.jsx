import React, { useState } from 'react'
const Data=()=>{
    const [isVisible, setIsVisible] = useState(false);
    const setDiv=()=>{
        setIsVisible(!isVisible)
    }
    return(<>
    
    <button onClick={setDiv}style={{color: 'pink',backgroundColor: 'firebrick'}}>הצג/הסתר</button>
    {isVisible&&<h1 style={{color: 'pink',backgroundColor: 'firebrick'}}>Hello! we are students.</h1>}
    </>)
}

export default Data