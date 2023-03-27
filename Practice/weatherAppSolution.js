// Practice: Use asynchronous functions to build a weather app tool.

// create a weather reports dictionary
const reports = {
    boston: {
        cityName: "Boston",
        temperature: "9",
        weather: "Mostly cloudy",
        airQuality: "Good"
    },
    newyork: {
        cityName: "NewYork",
        temperature: "4",
        weather: "Sunny",
        airQuality: "Excellent"
    },
    toronto: {
        cityName: "Toronto",
        temperature: "6",
        weather: "A mix of sun and clouds",
        airQuality: "Moderate risk"
    }
}

function ask(query) {
    // Create an interface
    const readline = require('readline').createInterface({
        input: process.stdin,
        output: process.stdout
    });
    // Cet user's input
    return new Promise(resolve => readline.question(query, ans => {
        readline.close();
        resolve(ans.toLowerCase());
    }))
}

// Check if the input data exists in the dictionary
function check(info) {
    return new Promise((resolve, reject) => {
        // if exisits, display the related information
        if (info in reports) {
            console.log(`--- This is the weather report of ${info} ---`);
            for (const [key, value] of Object.entries(reports[info])) {
                console.log(key + ":" + value);
            }
            resolve(" --- Have a nice day! ---");
        } else {
            // if not exisit, log out an error
            reject(`sorry, we can not find ${info}'s weather report (try Boston)`);
        }
    })
}

// Create main function
async function main() {
    console.log("Welcome to today's weather report!")
    var city = await ask("Please type a city that you want to check the weather: ");
    await check(city).then((sucessMsg) => {
        console.log(sucessMsg);
    })
        .catch((errMsg) => {
            console.log(errMsg);
        });
    console.log("Thank you");
}

main();
