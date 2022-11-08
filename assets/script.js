let weather = {
  apiKey: "3687cc076ea1bdcd40a2b67ec12296e3",
  fetchWeather: function (city) {
    console.log("city= ", city);
    fetch(
      "https://api.openweathermap.org/data/2.5/weather?q=" +
        city +
        "&units=imperial&appid=" +
        this.apiKey
    )
      .then((response) => response.json())
      .then((data) => {
        console.log("data= ", data);
        this.displayWeather(data);
      });
  },
  displayWeather: function (data) {
    const { name } = data;
    const { icon, description } = data.weather[0];
    const { temp, humidity } = data.main;
    const { speed } = data.wind;
    console.log(name, icon, description, temp, humidity, speed);
    document.querySelector(".city").innerText = "weather in " + name;
    document.querySelector(".icon").src =
      "https://openweathermap.org/img/wn/" + icon + "@2x.png";
    document.querySelector(".description").innerText = description;
    document.querySelector(".temp").innerText = temp + "°F";
    document.querySelector(".humidity").innerText =
      "Humidity: " + humidity + "%";
    document.querySelector(".wind").innerText = "Wind speed: " + speed + " mph";
  },
  search: function () {
    this.fetchWeather(document.querySelector(".search-bar").value);
    // weather.search();
  },
};

document.querySelector("#search-btn").addEventListener("click", function () {
  console.log("click call back");
  weather.search();
});
