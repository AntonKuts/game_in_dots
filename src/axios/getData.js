import axios from "axios";

const getData =( url, func )=> {
    axios.get(url)
        .then( ( response ) => {
            func(response.data);
        })
        .catch( ( error ) => {
            console.log('error in getData ', error);
        })
};

export default getData;
