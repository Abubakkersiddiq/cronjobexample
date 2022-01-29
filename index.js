import axios from 'axios';


const getExampleData = async() => {
    const result = await axios.get('https://jsonplaceholder.typicode.com/posts');

    console.log(result.data);
}


getExampleData();