import axios from "axios";

const getData =(url, func)=> {
    axios.get(url)
        .then( (response) => {
            func(response.data);
        })
        .catch( () => {
            func([]);
        })
};

export default getData;
