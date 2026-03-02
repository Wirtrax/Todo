import TodoItem from "./TodoItem";
const TodoList = (props) => {

    const {
        tasks = [],
        onDeleteTaskButtonClick,
        onTaskCompleteChange,
        filteredTasks
    } = props
    
    const hasTasks = tasks.length > 0;
    const isEmptyFilteredTasks = filteredTasks?.length === 0;

    if (!hasTasks) {
        return <div className="todo__empty-message">There are not tasks yet</div>
    }

    if (hasTasks && isEmptyFilteredTasks) {
        return <div className="todo__empty-message">Tasks no found</div>
    }

    return (
        <ul className="todo__list">
            {(filteredTasks ?? tasks).map((task) => (
                <TodoItem
                    className="todo__item"
                    id={task.id}
                    title={task.title}
                    isDone={task.isDone}
                    key={task.id}

                    onDeleteTaskButtonClick={onDeleteTaskButtonClick}
                    onTaskCompleteChange={onTaskCompleteChange}
                />
            ))}
        </ul>
    );
}

export default TodoList;