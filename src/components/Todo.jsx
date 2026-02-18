import { useState } from "react"
import AddTaskForm from "./AddTaskForm"
import SearchTaskForm from "./SearchTaskForm"
import TodoInfo from "./TodoInfo"
import TodoList from "./TodoList"
const Todo = () => {

    const tasksApi = [
        { id: 'task-1', title: "купить молоко", isDone: false },
        { id: 'task-2', title: "купить молоко", isDone: true },
        { id: 'task-3', title: "купить молоко", isDone: false },
        { id: 'task-4', title: "купить молоко", isDone: true },
    ]

    const [tasks, setTasks] = useState(tasksApi)
    const [newTaskTitle, setNewTaskTitle] = useState('')

    const deleteAllTask = () => {
        console.log("deleteAll");

        const isConfiremed = confirm("are you sure you want delete all?")

        if (isConfiremed) {
            setTasks([])
        }
    }

    const deleteTask = (taskId) => {
        console.log(`deleteTask id: ${taskId}`);

        setTasks(
            tasks.filter((task) => task.id !== taskId)
        )
    }

    const toggleTaskComplete = (taskId, isDone) => {
        console.log(`задача ${taskId} имеет статус ${isDone}`)

        setTasks(
            tasks.map((task) => {
                if (task.id === taskId) {
                    return { ...task, isDone }
                }

                return task
            })
        )
    }

    const filterTask = (query) => {
        console.log(`${query}`)
    }

    const addTask = () => {
        if (newTaskTitle.trim().length > 0) {
            const newTask = {
                id: crypto?.randomUUID ?? Date.now().toString(),
                title: newTaskTitle,
                isDone: false
            }

            setTasks([...tasks, newTask])

            setNewTaskTitle('')
        }
    }

    return (
        <section className="todo">
            <h1 className="todo__title">To Do List</h1>
            <AddTaskForm
                addTask={addTask}
                newTaskTitle={newTaskTitle}
                setNewTaskTitle={setNewTaskTitle}
            />
            <SearchTaskForm
                onSearchInput={filterTask}

            />
            <TodoInfo
                total={tasks.length}
                done={tasks.filter(({ isDone }) => isDone).length}
                onDeleteAllButtonClick={deleteAllTask}
            />
            <TodoList
                tasks={tasks}
                onDeleteTaskButtonClick={deleteTask}
                onTaskCompleteChange={toggleTaskComplete}
            />
        </section>
    );
}

export default Todo;