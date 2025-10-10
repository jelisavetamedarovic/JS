const fetchData = async (url) => {
    const resoult = await fetch(url);
    const data = await resoult.json();
    // console.log(data);
}

fetchData('https://jsonplaceholder.typicode.com/todos');
