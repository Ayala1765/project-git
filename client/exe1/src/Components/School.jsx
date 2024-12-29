import React, { useState, useEffect, useRef } from 'react';
const School = () => {
    const [kurses, setKurses] = useState('');
    const [teachers, setTeachers] = useState('');
    const [student, setStudent] = useState('');
    const [kurs, setKurs] = useState('');
    const [flag, setFlag] = useState(0);
    const show1 = () => {
        setKurses("ImageProssecing, NodeJs, Sql, Phayton, C++, C, Cshrap, Java, Asembly, DigitalSystem")
    }
    const show2 = () => {
        setTeachers("Gross, Hold, Ano, Kobelov, Shushan, Goldmintz, Orbach, Peretz, Botbul, Chaliva")
    }
    const show3 = () => {
        setFlag(1);
    }
    const show4 = () => {
        setFlag(0);
        
        
    }
     useEffect(() => { alert('ברוך הבא') }, []);

    return (
        <>
            <button onClick={show1}>veiw kurses</button>
            <div>{kurses}</div>
            <br />
            <button onClick={show2}>veiw teachers</button>
            <div>{teachers}</div>
            <br />
            <div>students:</div>
            <div>Ayala, Tamar, Chedva, Tzili, Shira, Sheyndi, Elisheva</div>
            <br />
            <button onClick={show3}>sign up</button>
            {flag == 1 ? <div>
                <input type="text"
                    value={student}
                    onChange={(e) => { setStudent(e.target.value) }}
                    placeholder='enter student name' />
                <input type="text"
                    value={kurs}
                    onChange={(e) => { setKurs(e.target.value) }}
                    placeholder='enter cors name' />
            </div> : <></>}
             <br />
            <button onClick={show4}>OK</button>
            {flag ==0 ? <div>{student}   {kurs}</div> : <></>}
           

        </>
    )
}
export default School;