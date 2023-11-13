let weather = {
  apiKey:"13e68773ab0bf3d30c1c1f70b420bd91",
  fetchWeather: function (city) {
    fetch(
      "https://api.openweathermap.org/data/2.5/weather?q=" +
        city +
        "&units=metric&appid=" +
        this.apiKey
    )
      .then((response) => {
        if (!response.ok) {
          alert("No weather found.");
          throw new Error("No weather found.");
        }
        return response.json();
      })
      .then((data) => this.displayWeather(data));
  },
  displayWeather: function (data) {
    const { name } = data;
    const { icon, description } = data.weather[0];
    const { temp, humidity } = data.main;
    const { speed } = data.wind;
    document.querySelector(".city").innerText = name;
    document.querySelector("#desc").innerText = description;
    document.querySelector("#temp").innerText = temp+" C";
    document.querySelector("#hum").innerText = "Humidity : "+humidity;
    document.querySelector("#wind").innerText = "Wind speed : "+speed;
  },
  search:function(){
  	this.fetchWeather(document.querySelector("#search-bar").value);
  }
}

document.querySelector(".sbut").addEventListener("click",function(){
	weather.search();
})
document.addEventListener("keypress",function(e){
	if (e.key === 'Enter') {
      weather.search();
    }
})