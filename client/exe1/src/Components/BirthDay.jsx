import React, { useState } from 'react';

const BirthDay=() =>{
    const [age, setAge] = useState('')
    const [name, setName] = useState('')
    const [str, setStr] = useState('')


    return (
        <>
            <br />
            <input
                type="text"
                value={name}
                onChange={(e) => { setName(e.target.value) }}
                placeholder='enter you name'
            />
            <br />
            <input
                type="text"
                value={age}
                onChange={(e) => {
                    setAge(e.target.value)
                    if (age > 18)
                        setStr("משתמש מעל גיל 18")
                    else
                        setStr("")

                }}
                placeholder='enter you age'
            />


            <br />
            <h3 style={{ color: 'pink', backgroundColor: 'firebrick' }}>Happy Birthday {name}! You are {age} years old! </h3>
            <h3>{str}</h3>
            
        </>
    );
}

export default BirthDay