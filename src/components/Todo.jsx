import { useEffect, useState } from "react"
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

    const [newTaskTitle, setNewTaskTitle] = useState('')
    const [searchQuery, setSearchQuery] = useState('')
    const [tasks, setTasks] = useState(() => {
        const saveTasks = localStorage.getItem("tasks");
        if (saveTasks) {
            return JSON.parse(saveTasks)
        }
        return tasksApi
    })


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

    const addTask = () => {
        if (newTaskTitle.trim().length > 0) {
            const newTask = {
                id: crypto?.randomUUID ?? Date.now().toString(),
                title: newTaskTitle,
                isDone: false
            }

            setTasks([...tasks, newTask])

            setNewTaskTitle('')
            setSearchQuery('')
        }
    }

    useEffect(() => {
        localStorage.setItem('tasks', JSON.stringify(tasks))
    }, [tasks])

    const clearSearchQuery = searchQuery.trim().toLocaleLowerCase();

    const filteredTasks = clearSearchQuery.length > 0 ? tasks.filter(
        ({ title }) => title.toLocaleLowerCase().includes(clearSearchQuery)
    ) : null;

    return (
        <section className="todo">
            <h1 className="todo__title">To Do List</h1>
            <AddTaskForm
                addTask={addTask}
                newTaskTitle={newTaskTitle}
                setNewTaskTitle={setNewTaskTitle}
            />
            <SearchTaskForm
                searchQuery={searchQuery}
                setSearchQuery={setSearchQuery}
            />
            <TodoInfo
                total={tasks.length}
                done={tasks.filter(({ isDone }) => isDone).length}
                onDeleteAllButtonClick={deleteAllTask}
            />
            <TodoList
                tasks={tasks}
                filteredTasks={filteredTasks}
                onDeleteTaskButtonClick={deleteTask}
                onTaskCompleteChange={toggleTaskComplete}
            />
        </section>
    );
}

export default Todo;