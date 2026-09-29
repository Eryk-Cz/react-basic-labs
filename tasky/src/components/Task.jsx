const Task = (props) => {
    
    const priorityStyles = {
        Low: {
            backgroundColor: 'darkgreen',
            color: 'white',
            padding: '5px 10px',
            borderRadius: '5px',
            display: 'inline-block',
            fontWeight: 'bold',
        },

        Medium: {
            backgroundColor: 'yellow',
            color: 'white',
            padding: '2px 10px',
            borderRadius: '2px',
            display: 'inline-block',
            fontWeight: 'bold',
        },

        High: {
            backgroundColor: 'red',
            color: 'white',
            padding: '5px 10px',
            borderRadius: '5px',
            display: 'inline-block',
            fontWeight: 'bold',
        },
    };

    return (
        <div className="card" style={{backgroundColor: props.done ? 'lightgrey' : '#5bb4c4'}}>
        <p className="title">{props.title}</p>
        <p>Due: {props.deadline}</p>
        <p>{props.children}</p>
        <p className="description">{props.description}</p>
        <p className="priority" style={priorityStyles[props.priority] || {}}>{props.priority}</p>
        <button onClick={props.markDone} className="doneButton">Done</button>
        <button className="deleteButton" onClick={props.deleteTask}> Delete </button>

        </div>
    )
}

export default Task;
