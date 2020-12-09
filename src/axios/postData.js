import axios from "axios";

const getData =( url, func, dataToPost )=> {
    axios.post(url, dataToPost)
        .then( (response) => {
            func(response.data);
        })
        .catch( ( error ) => {
            console.log('error in getData ', error);
        })
};

export default getData;
