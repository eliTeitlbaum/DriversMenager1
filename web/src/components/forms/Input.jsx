function Input({
    textView,
    value,
    onChange,
    type,
    className
}) {

    function onChangeInput(event) {
        onChange(event.target.value);
    }

    return (
        <input
        placeholder={textView}
        value={value}
        onChange={(event) => onChangeInput(event)}
        type={type || 'text'}
        className={className}
        />
    );
}

export default Input;
