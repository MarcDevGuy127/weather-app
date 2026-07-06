import 'dotenv/config';

const apiKey = process.env.API_KEY;

console.log(apiKey);

// defining consts
const weatherForm = document.querySelector(".weatherForm");
const cityInput = document.querySelector(".cityInput");
const card = document.querySelector(".card");

// defining form's button action
weatherForm.addEventListener("submit", event => {

});

// assyncronous function for get data from city inside API 
async function getWeatherData(city){

}

// function for display weather results
function displayWeatherInfo(data) {
    
}

// function for get weather Emoji
function getWeatherEmoji(weatherId) {
    
}

// function for display error
function displayError(message) {
    
}