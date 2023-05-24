import {createSlice} from "@reduxjs/toolkit";

interface initialTask {
    name: string;
    desc: string;
    time: string;
    completed: boolean
}
export interface TaskerState {
    tasks: initialTask[]
}
const initialState: TaskerState = {
    tasks: []
}

export const TaskerSlice = createSlice({
    name: 'tasker',
    initialState,
    reducers: {
        add: () => {}
    }
})
