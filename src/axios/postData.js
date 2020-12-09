import axios from "axios";

const postData =( url, func, dataToPost )=> {
    axios.post(url, dataToPost)
        .then( (response) => {
            func(response.data);
        })
        .catch( ( error ) => {
            console.log('error in postData ', error);
        })
};

export default postData;
