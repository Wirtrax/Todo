import AddTaskForm from "./AddTaskForm"
import SearchTaskForm from "./SearchTaskForm"
import TodoInfo from "./TodoInfo"
import TodoList from "./TodoList"
const Todo = () => {

    const tasks = [
        { id: 'task-1', title: "купить молоко", isDone: false },
        { id: 'task-2', title: "купить молоко", isDone: true },
        { id: 'task-3', title: "купить молоко", isDone: false },
        { id: 'task-4', title: "купить молоко", isDone: true },
    ]

    return (
        <section className="todo">
            <h1 className="todo__title">To Do List</h1>
            <AddTaskForm />
            <SearchTaskForm />
            <TodoInfo
                total={tasks.length}
                done={tasks.filter(({ isDone }) => isDone).length}
            />
            <TodoList tasks={tasks} />
        </section>
    );
}

export default Todo;