fetch("https://jsonplaceholder.typicode.com/users")
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        console.log(data);

        for (let i = 0; i < data.length; i++) {
            console.log(data[i].name);
        }
    })
    .catch(function (error) {
        console.log("Error:", error);
    });
