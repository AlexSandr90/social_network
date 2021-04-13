const required = value => {
    return  value ? undefined : 'Field is required'
};

const maxLengthCreator = maxlength => value => {
    return (value.length > maxlength) ? `Max length more then ${maxlength} symbols` : undefined
};

export {
    required,
    maxLengthCreator
}
