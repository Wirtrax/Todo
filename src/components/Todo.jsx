import AddTaskForm from "./AddTaskForm"
import SearchTaskForm from "./SearchRaskForm"
import TodoInfo from "./TodoInfo"
import TodoList from "./TodoList"
const Todo = () => {
    return (
        <section className="todo">
            <h1 className="todo__title">To Do List</h1>
            <AddTaskForm />
            <SearchTaskForm />
            <TodoInfo />
            <TodoList />
        </section>
    );
}

export default Todo;