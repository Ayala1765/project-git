import React from 'react';

const Todo = (props) => {
    return (
        <>
            <h1 dir='rtl' style={{color: 'pink'}}>{props.task.id}</h1><h1 dir='rtl' style={{color: 'pink'}}>{props.task.dis}</h1>
        </>
        )
}
export default Todo;