import { useStore } from '@nanostores/react'
import {createRoot} from 'react-dom/client';
import {$tasks} from "./store";
import {FormEvent} from "react";
import {addTask} from "./store/tasks";

export const App = () => {
    const listTasks = useStore($tasks)

    const handleAddTask = (event:FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        const task = {
            name: event?.target?.name.value,
            desc: event?.target?.desc.value
        }
        addTask(task)
    }
    console.log(listTasks)
    return (
        <div>
            <form onSubmit={(event)=>handleAddTask(event)}>
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
// @ts-ignore
const root = createRoot(container);
root.render(<App />);
