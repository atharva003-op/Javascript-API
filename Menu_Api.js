// (npm install prompt-sync) install this package in terminal!
const prompt = require("prompt-sync")();

async function getData () {
    const response = await fetch (
        "https://jsonplaceholder.typicode.com/users"
    );

    const data = await response.json();

    let choice = 0;

    while (choice != 7) {
        console.log("--- |API| ---");
        console.log("[1].Get names");
        console.log("[2].Get usernames")
        console.log("[3].Get ids");
        console.log("[4].Get email addresses");
        console.log("[5].Get phone no's");
        console.log("[6].Get data in JSON Format");
        console.log("[7].Exit");
        choice = Number(prompt("Enter choice (1-6) : "));

        if (choice <= 0 || choice > 7) {
            console.warn("Invalid choice!\n");
            continue;
        }

        if (choice == 7) {
            console.log("Program Exited Sucessfully!");
            break;
        }

        if (choice == 1) {
            console.log("All name : \n");
            data.forEach ((data, index) => {
                console.log(`Name ${index + 1} : ${data.name}`);
            });
            console.log("\n");
        }

        else if (choice == 2) {
            console.log(`All usernames : \n`);
            data.forEach ((data, index) => {
                console.log(`Username ${index + 1} : ${data.username}`);
            });
            console.log("\n");
        }

        else if (choice == 3) {
            console.log("All Id's : \n");
            data.forEach ((data, index) => {
                console.log(`Id ${index + 1} : ${data.id}`);
            });
            console.log("\n");
        }

        else if (choice == 4) {
            console.log("All Email Addresses : \n");
            data.forEach ((data, index) => {
                console.log(`Email Address ${index + 1} : ${data.email}`);
            });
            console.log("\n");
        }

        else if (choice == 5) {
            console.log("All Phone No's : ");
            data.forEach ((data, index) => {
                console.log(`PhoneNo ${index + 1} : ${data.phone}`)
            });
            console.log("\n");
        }

        else if (choice == 6) {
            console.log(data);
        }
    }
}

getData();
