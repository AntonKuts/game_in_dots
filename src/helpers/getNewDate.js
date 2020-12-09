const getNewDate = () => {
    const date = new Date();

    const options = {
        hour: 'numeric',
        minute: 'numeric',
        second: 'numeric',
        year: 'numeric',
        month: 'long',
        day: 'numeric',
    };

    return date.toLocaleString("en-US", options);
};

export default getNewDate;
