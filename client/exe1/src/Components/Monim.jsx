
import React, { useState } from 'react';

const Monim=()=> {
  const [count, setCount] = useState(0);
  const [str, setStr] = useState('');

const number = () => {
    if (count === 6) {
      setCount(0);
          setStr("הגזמת...")
     } else {
      setCount(count+1);
      setStr(''); 
     }
  };

  return (
    <div>
      <button onClick={number}>++</button>
      <div>מספר כעת : {count}</div>
      { <div>{str}</div>} 
    </div>
  );
}

export default Monim