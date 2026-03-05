import { Field } from "./Field";
import { Button } from "./Button";
import { useContext } from "react";
import { TasksContext } from "../context/TasksContext";

const AddTaskForm = () => {

    const {
        addTask,
        newTaskTitle,
        setNewTaskTitle,
        newInputTaskRef
    } = useContext(TasksContext)

    const onSubmit = (event) => {
        event.preventDefault()
        addTask()
    }

    return (
        <form className="todo__form" onSubmit={onSubmit}>
            <Field
                className="todo__field"
                label="New task title"
                id="new-task"
                value={newTaskTitle}
                onInput={(e) => setNewTaskTitle(e.target.value)}
                ref={newInputTaskRef}
            />
            <Button type='submit'>Add</Button>
        </form>);
}

export default AddTaskForm;