
import React, { useState,useEffect } from 'react';

const Message=()=> {
    const [str, setStr] = useState('')
    useEffect(() => { alert('ברוך הבא') }, []);
  
const show=()=>{
    alert(str)
}


  return (
    <>
        <input 
        type="text"
        value= {str}
        onChange={(e)=>{setStr(e.target.value)}}
        placeholder='enter you message'
        />
        <br/>
         <button onClick={show}>alert</button>
    </> 
  );
}

export default Message