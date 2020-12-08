import axios from "axios";

const getData =( url, func )=> {
    axios.get(url)
        .then( ( response ) => {
            func(response.data);
        })
        .catch( ( error ) => {
            func(console.log('error in getData ', error));
        })
};

export default getData;
