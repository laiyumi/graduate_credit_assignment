// Practice: Use asynchronous functions to build a weather app tool.

// Create a weather reports dictionary
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

// Get user input
function ask() {
    // TODO: Create an interface to read user's input
    // TODO: Get user's input and return a promise
    // TODO: Close the interface
    // TODO: Resolve the promise
    // TODO: Return the promise
}


// Use user input to check if it exists in the weather report
function check() {
    // TODO: Check if the input data exists in the dictionary
    // TODO: If exisit, log out the weather report
    // TODO: Resolve the promise
    // TODO: If not, reject the promise
    // TODO: Return the promise
}


async function main() {
  console.log("Welcome to today's weather report!")

  // TODO: Get user input
  // TODO: Check if the input data exists in the dictionary

  console.log("Thank you");
}

