import { Field } from "./Field";

const SearchTaskForm = () => {
    return (
        <form className="todo__form">
            <Field
                className="todo__field"
                label="Seacrh task"
                id="new-task"
                type="search"
            />
        </form>
    );
}

export default SearchTaskForm;