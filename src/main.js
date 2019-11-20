import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';

$(document).ready(function() {
  $('#weatherLocation').click(function() {
    const city = $('#location').val();
    $('#location').val("");

    let request = new XMLHttpRequest();
    const url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${process.env.API_KEY}`


    // const xhr = $.get("http://api.giphy.com/v1/gifs/search?q=ryan+gosling&api_key="+${process.env.GIPHY_KEY}+"&limit=5");
    // xhr.done(function(data) { console.log("success got data", data); });


    // API CALL 1
    request.onreadystatechange = function() {
      if (this.readyState === 4 && this.status === 200) {
        const response = JSON.parse(this.responseText);
        getElements(response);
      }
    }

    request.open("GET", url, true);
    request.send();


   const getElements = function(response) {
      $('.showHumidity').text(`The humidity in ${city} is ${response.main.humidity}%`);
      $('.showTemp').text(`The temperature in Kelvins is ${response.main.temp} degrees.`);
      $('.chickens').text(`${response.main.temp}`);
    }


    // API CALL 2 NOT WORKING
    let request2 = new XMLHttpRequest();
    const gifs = `http://api.giphy.com/v1/gifs/search?q=chickens&api_key=${process.env.GIPHY_KEY}`

    request2.onreadystatechange = function() {
      if (this.readyState === 4 && this.status === 200) {
        const response2 = JSON.parse(this.responseText);
        getElements2(response2);
      }
    }

    request2.open("GET", gifs, true);
    request2.send();

    const getElements2 = function(response2) {
       $('#chickens').attr("src",response2.data.images.original.url);
     }

  });
});
