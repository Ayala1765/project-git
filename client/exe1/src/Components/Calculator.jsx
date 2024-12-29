import React, { useState,useRef } from 'react';

const Calculator = () => {
    const sum = useRef(0);
    const [s, setS] = useState('')

    const calc = () => {
        setS(Number(sum.current.value)*3.7)

    }
    return (
        <>
            <input
                ref={sum}
                placeholder="enter sum"
            />
            <button onClick={calc}>
                המרה לדולר
            </button >
            <p>{s}</p>
        </>)
}
export default Calculator;
