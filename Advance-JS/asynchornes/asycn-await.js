function api(data) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("weather data", data);
      resolve(200);
    }, 2 * 1000); // 2000ms is 2s
  });
}

async function getWeatherData() {
  console.log("getting weather data 1");
  await api(1);
  console.log("getting weather data 2");
  await api(2);
  console.log("getting weather data 3");
  await api(3);
  console.log("getting weather data 4");
  await api(4);
  console.log("getting weather data 5");
  await api(5);
  console.log("getting weather data 6");
  await api(6);
}

getWeatherData();
