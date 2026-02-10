export const Field = (props) => {
    const {
        className = '',
        id,
        label,
        type = 'text',
    } = props;

    return (
        <div className={`field ${className}`}>
            <label
                className="field__label"
                htmlFor={id}
            >

            </label>
            <input
                className="field__input"
                id={id}
                placeholder={label}
                autoComplete="off"
                type={type}
            />
        </div>
    )
}