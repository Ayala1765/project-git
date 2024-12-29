import React, { useState } from 'react'
const String=()=>{
    const [str, setStr] = useState("");
    const show1=()=>{setStr("בוקר טוב")}
    const show2=()=>{setStr("צהריים טובים")}
    return(<>
    <br/>
    <br/>
    <button onClick={show1}  >הצג מחרוזת 1</button>
    <button onClick={show2} >הצג מחרוזת 2</button>
    <div>{str}</div>
    
    </>)
}

export default String