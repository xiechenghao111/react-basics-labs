import React from 'react';


const Task = (props) => {

    return (
        <div className="card">
            <p className="title">{props.title}</p>
            <p>Due: {props.deadline}</p>
            <p>{props.children}</p>
        </div>
    )
}

taskState.tasks.map(
    (task) => { return <Task /> }
  );

export default Task;