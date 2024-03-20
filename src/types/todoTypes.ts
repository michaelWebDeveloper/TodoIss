export type Todo = {
    id: number,
    name: string,
    description: string,
    isDone: boolean,
};

export type TodoList = Array<Todo>;