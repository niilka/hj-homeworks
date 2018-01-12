const request = new XMLHttpRequest();

request.addEventListener('load', updateWeather);
request.open('GET', 'https://netology-fbb-store-api.herokuapp.com/weather');
request.send();

function updateWeather(event) {
  if (event.target.status === 200) {
    const response = JSON.parse(event.target.responseText);
    setData(response);
  }
}