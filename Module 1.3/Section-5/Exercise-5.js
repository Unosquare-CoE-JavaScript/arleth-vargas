var userPosts;

// Here we are defining the function that will be executed once we get the data from the API
const getPosts = async function(userID) {
    let url = 'https://jsonplaceholder.typicode.com/posts',
        posts = [];

    // Pauses and wait until the response is resolved
    posts = await fetch(url).then(resp => resp.json());

    return posts.filter(obj => obj.userId === userID);
};

getPosts(1).then(val => userPosts = val);

console.log("Remaining Code.");
