import React, { useReducer,useState } from 'react';
import Todo from './Todo';

const Alltodos = () => {
const [name, setName] = useState('');
const [id, setId] = useState('');
    const useReduce = (state, action) => {
        switch (action.type) {
            case "add":
                return state + action.newTask
           // case "delete":

        }
    }

    const [tasks, dispatch] = useReducer(useReduce, [
        { id: 1, dis: "write" },
        { id: 2, dis: "listen" },
        { id: 3, dis: "read" }])
   const add = () => {
             dispatch({ type: "add", by: { id: {id}, dis: {name} } } )
   }
    // const deletee = () => {
    //     dispatch({ type: "delete", pastTask: { id: 1, dis: "speak" } })
    // }
    return (<>
        {/* {
            tasks.map(task => {
                return <Todo task={task} />
            })
        } */}
         <input type="text"
            value={name}
            onChange={(e) => { setName(e.target.value) }}
            placeholder='enter task name to add' />
            <br /> 
        <input type="text"
            value={id}
            onChange={(e) => { setId(e.target.value) }}
            placeholder='enter task id to add' />
            <br /> 
        <button onClick={add}>add task</button> 
        <br /> 
        {tasks.map()}
        {/* <input type="text"
            value={student}
            onChange={(e) => { setStudent(e.target.value) }}
            placeholder='enter task id to delete' /> */}

        {/* <button onClick={deletee}>delete task</button> */}
    </>)
}
export default Alltodos;