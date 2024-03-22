export type Todo = {
    id: number,
    name: string,
    description: string,
    isDone: boolean,
};

export type TodoData = {
    name: string,
    description: string
}

export type TodoList = Array<Todo>;