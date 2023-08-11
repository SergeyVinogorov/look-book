import React, {useState} from "react";
import {createRoot} from 'react-dom/client';

export const App = () => {
    const [listTasks, setListTasks] = useState([])

    const handleAddTask = (event) => {
        event.preventDefault()
        const task = {
            name: event.target.name.value,
            desc: event.target.desc.value
        }
        setListTasks([...listTasks, task])
    }

    return (
        <div>
            <form onSubmit={handleAddTask}>
                <input type='text' name='name'/>
                <input type='text' name='desc'/>
                <button type="submit">Add</button>
            </form>
            <div>
                {listTasks.map((task) => {
                   return( <div>
                        <h2>{task.name}</h2>
                        <p>{task.desc}</p>
                    </div>)
                })}
            </div>
        </div>
    )
}
const container = document.getElementById('root');
const root = createRoot(container);
root.render(<App />);
