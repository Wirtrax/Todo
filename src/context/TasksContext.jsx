import { createContext, useCallback, useState, useRef, useEffect, useMemo } from "react";

export const TasksContext = createContext({})

export const TasksProvider = (props) => {
    const {
        children
    } = props

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
    const newInputTaskRef = useRef(null)
    const firstIncompleteTaskRef = useRef(null)
    const firstIncompleteTaskId = tasks.find(({ isDone }) => !isDone)?.id

    useEffect(() => {
        newInputTaskRef.current.focus()
    }, [])

    useEffect(() => {
        localStorage.setItem('tasks', JSON.stringify(tasks))
    }, [tasks])

    const deleteAllTask = useCallback(() => {
        const isConfiremed = confirm("are you sure you want delete all?")

        if (isConfiremed) {
            setTasks([])
        }
    }, [])

    const deleteTask = useCallback((taskId) => {


        setTasks(
            tasks.filter((task) => task.id !== taskId)
        )
    }, [tasks])

    const toggleTaskComplete = useCallback((taskId, isDone) => {


        setTasks(
            tasks.map((task) => {
                if (task.id === taskId) {
                    return { ...task, isDone }
                }

                return task
            })
        )
    }, [tasks])

    const addTask = () => {
        if (newTaskTitle.trim().length > 0) {
            const newTask = {
                id: crypto?.randomUUID() ?? Date.now().toString(),
                title: newTaskTitle,
                isDone: false
            }

            setTasks([...tasks, newTask])

            setNewTaskTitle('')
            setSearchQuery('')
            newInputTaskRef.current.focus()
        }
    }

    const filteredTasks = useMemo(() => {
        const clearSearchQuery = searchQuery.trim().toLocaleLowerCase();
        return clearSearchQuery.length > 0 ? tasks.filter(
            ({ title }) => title.toLocaleLowerCase().includes(clearSearchQuery)
        ) : null
    }, [searchQuery, tasks])

    return (
        <TasksContext.Provider
            value={{
                tasks,
                filteredTasks,
                firstIncompleteTaskId,
                firstIncompleteTaskRef,
                newTaskTitle,
                newInputTaskRef,
                searchQuery,
                deleteAllTask,
                deleteTask,
                toggleTaskComplete,
                addTask,
                setNewTaskTitle,
                setSearchQuery
            }}>
            {children}
        </TasksContext.Provider>
    )
}