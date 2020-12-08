const formValidate = (values) => {
    const errors = {};

    if (!values.name) errors.name = 'You should enter your name!';
    if (!values.gameMode) errors.gameMode = 'You should choose game mode!';

    return errors;
};

export default formValidate;
