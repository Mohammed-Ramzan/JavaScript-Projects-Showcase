// // Function to fetch weather data from an API
// async function fetchWeatherData() {
//     try {
//       const response = await fetch('https://api.weatherapi.com/v1/current.json?key=YOUR_API_KEY&q=New York');
//       const data = await response.json();
//       return data;
//     } catch (error) {
//       console.log('Error fetching weather data:', error);
//     }
//   }
  
//   // Function to display weather information
//   function displayWeather() {
//     fetchWeatherData()
//       .then(data => {
//         console.log('Temperature:', data.current.temp_c);
//         console.log('Condition:', data.current.condition.text);
//         console.log('Humidity:', data.current.humidity);
//       })
//       .catch(error => {
//         console.log('Error displaying weather:', error);
//       });
//   }
  
//   // Calling the function
//   displayWeather();
  

// This function simulates ordering a pizza
function orderPizza() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve('Your pizza has arrived!');
      }, 3000); // It takes 3 seconds for the pizza to arrive
    });
  }
  
  // This function uses async/await to order a pizza and do something else
  async function orderAndPlay() {
    console.log('Ordering a pizza...');
    const pizza = await orderPizza();
    console.log(pizza);
    console.log('Watching TV while waiting for the pizza!');
  }
  
  // Calling the function
  orderAndPlay();
  