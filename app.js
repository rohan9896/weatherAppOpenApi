var input = document.querySelector('.input_text');
var nameOfCity = document.querySelector('.name');
var temp = document.querySelector('.temp');
var desc = document.querySelector('.desc');
var clouds = document.querySelector('.clouds');
var visibility = document.querySelector('.visib');
var windspeed = document.querySelector('.windspeed')
var button= document.querySelector('.submit');



button.addEventListener('click', function(){
fetch('https://api.openweathermap.org/data/2.5/weather?q='+input.value+'&appid=3b3e8e4c5e14b02719a72fc610df9504')
.then(response => response.json())
.then(data => {
  var tempValue = Math.floor(data['main']['temp'] - 273);
  var nameValue = input.value.toUpperCase();
  var descValue = data['weather'][0]['description'];
  var cloudsValue = data['clouds']['all'];
  var visibilityValue = data['visibility'];
  var windspeedValue = data['wind']['speed'];

  nameOfCity.innerHTML = ""+nameValue;
  desc.innerHTML = "Description : "+descValue;
  temp.innerHTML = "Temperature : "+tempValue+"\u00B0 C";
  clouds.innerHTML = "Clouds : "+cloudsValue+"% of sky";
  visibility.innerHTML = "Visibility : "+visibilityValue+"m";
  windspeed.innerHTML = "Wind Speed : "+windspeedValue + "km/hr";
  input.value = '';
  console.log(data);

})

.catch(err => alert("Wrong city name!"));
})
