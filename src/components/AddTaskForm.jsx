import { Field } from "./Field";
import { Button } from "./Button";

const AddTaskForm = (props) => {

    const {
        addTask,
        newTaskTitle,
        setNewTaskTitle,
    } = props

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
            />
            <Button type='submit'>Add</Button>
        </form>);
}

export default AddTaskForm;