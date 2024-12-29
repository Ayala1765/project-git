import React, { useEffect, useState } from 'react';
const Monim2 = () => {
    const [cnt, setCnt] = useState(0);
    const [cnt1, setCnt1] = useState(0);
    const Mult=()=>{setCnt1(cnt*2)}
    useEffect(() => {Mult() }, [cnt]);

    const mone = () => {
        setCnt(Number(cnt)+1)
    }

    return (
        <>

            <button onClick={mone}>
                mone
            </button >
            <p>{cnt}</p>
          <p>{cnt1}</p>
        </>)
}
export default Monim2;
