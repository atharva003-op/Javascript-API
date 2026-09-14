async function getData () {
    const response = await fetch (
        "https://dummyjson.com/users"
    );

    const data = await response.json();

    data.users.forEach((data, index) => {
        console.log(`Name ${index + 1} : ${data.firstName} ${data.ip}`);
    });

    //console.log(data);
}

getData();
