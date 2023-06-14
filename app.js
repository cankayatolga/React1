import axios from "axios";

async function getData (userId) {

    const getUsers = async (userId) => {
        const { data } = await axios("https://jsonplaceholder.typicode.com/users/" + userId);
        console.log(data);

    }   

    const getPost = async (userId) => {
        const { posts } = await axios("https://jsonplaceholder.typicode.com/posts?userId=" + userId);
        console.log(posts)

    }
    return getUsers (userId) + getPost (userId)
}









export default getData;