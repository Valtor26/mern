// Fetch API: get some data from the internet

fetch("https://randomuser.me/api/")
.then((rawData) => {
    // the fetched data will be in a non readable format so we must use .json() to convert it to json format for better understanding
    return rawData.json();
})
.then((data) => {
    console.log(data.results[0].name.first);
})
.catch((err) =>{
    console.log(err);
})