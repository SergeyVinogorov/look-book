import {atom} from "nanostores";

export type Task = {
    name: string;
    desc: string;
}
export const $tasks = atom<Task[]>([])

export function addTask(task: Task) {
    $tasks.set([...$tasks.get(), task]);
}
