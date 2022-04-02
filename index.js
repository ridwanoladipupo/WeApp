let weatherTitleEl = document.getElementById("weather-title")
let placeEl = document.getElementById("place")
let tempEl = document.getElementById("temp")
let windEl = document.getElementById("wind-speed")
let humidityEl = document.getElementById("humidity")
let hiLowEl = document.getElementById("hi-low")
let pressureEl = document.getElementById("pressure")
let sunRiseEl = document.getElementById ("sun-rise")
let sunSetEl = document.getElementById("sun-set")
let remarkEl = document.getElementById("remark")
let iconEl = document.getElementById("today-sun")


//for  the modal when you click on the city in the city list
let weatherTitleEl1 = document.getElementById("weather-title1")
let placeEl1 = document.getElementById("place1")
let tempEl1 = document.getElementById("temp1")
let windEl1 = document.getElementById("wind-speed1")
let humidityEl1 = document.getElementById("humidity1")
let hiLowEl1 = document.getElementById("hi-low1")
let pressureEl1 = document.getElementById("pressure1")
let sunRiseEl1 = document.getElementById ("sun-rise1")
let sunSetEl1 = document.getElementById("sun-set1")
let remarkEl1 = document.getElementById("remark1")
let iconEl1 = document.getElementById("today-sun1")



const timeEl = document.getElementById("time")
const dateEl = document.getElementById("date")
const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
setInterval(() => {
    const time = new Date();
    const month = time.getMonth();
    const date = time.getDate();
    const hour = time.getHours();
    const day = time.getDay();
    const minutes = time.getMinutes();
    const ampm = hour >= 12 ? 'PM' : 'AM'
    const hoursIn12hrFormat = hour >= 13 ? hour % 12 : hour
    timeEl.innerHTML = hoursIn12hrFormat + ':' + minutes + '' + `<span id="am-pm"> ${ampm}</span>`
    dateEl.textContent = days[day] + ', ' + date + ' ' + months[month]
}, 10);




// let result = document.querySelector(`#valz${i}`).value

let countries = {
    // api_key2: "cbLAaHSHonJaMOpUhrU1GIWWypF7QonV",
 
    fetchCountry: function () {
        fetch(
            "http://dataservice.accuweather.com/locations/v1/topcities/150?apikey=cbLAaHSHonJaMOpUhrU1GIWWypF7QonV&language=en-us&details=true")
            .then((response) => response.json())
            .then((datas) => this.showCountry(datas));
    },
    
    showCountry: function (datas) {
        
        for (let i = 0; i <= 120; i++) {
            if (i < 30) {
                document.getElementById("app").innerHTML += `<button data-bs-toggle="modal" data-bs-target="#exampleModal3" class="mb-2 ex-button ex-block ccc" onclick="getResult()"  id="valz${i}" value= "${datas[i].EnglishName}">  ${datas[i].EnglishName}, ${datas[i].Country.ID} </button>`
            } else if (i > 29 && i < 60) {
                document.getElementById("app2").innerHTML += `<button  data-bs-toggle="modal" data-bs-target="#exampleModal3"class="mb-2  ex-button ex-block ddd"  onclick="getResult()" id="valz${i}" value= "${datas[i].EnglishName}">${datas[i].EnglishName}, ${datas[i].Country.ID}</button>`
            }
            else if (i > 59 && i < 90) {
                document.getElementById("app3").innerHTML += `<button data-bs-toggle="modal" data-bs-target="#exampleModal3" class="mb-2 ex-button ex-block  eee" onclick="getResult()"  id="valz${i}" value= "${datas[i].EnglishName}" >${datas[i].EnglishName}, ${datas[i].Country.ID}</button>`
            }
            else if (i > 89 && i < 120) {
                document.getElementById("app4").innerHTML += `<button data-bs-toggle="modal" data-bs-target="#exampleModal3" class="mb-2 ex-button ex-block fff" onclick="getResult()"  id="valz${i}" value= "${datas[i].EnglishName}" >${datas[i].EnglishName}, ${datas[i].Country.ID}</button>`
            }
            // document.getElementById(`#valz${i}`).value =;
        }
    },
    

    

    



    
    
};
// for (let i = 0; i < 120; i++) {
//     document
//         .querySelector(`#valz${i} button`)
//         .addEventListener("click", function () {
//             countries.shc();
//         });
// }

setInterval(countries.fetchCountry(), 10);





let weather = {
    api_key: '&APPID=3125b25991c8211287d997d5267df890',
    fetchWeather: function (city) {
        fetch(
            "https://api.openweathermap.org/data/2.5/weather?q=" + city + "&units=metric" + this.api_key
        )
            .then((response) => response.json())
            .then((data) => this.displayWeather(data));
           
    },
    
    displayWeather: function (data) {
        let { name } = data;
        const { icon, description } = data.weather[0];
        const { temp, humidity, temp_min, temp_max, pressure } = data.main;
        const { country, sunrise, sunset } = data.sys;
        const { speed } = data.wind;
        console.log(name, icon, description, temp, humidity, speed);
        
        weatherTitleEl.innerText = "Weather for " + name;
        placeEl.textContent = name + ", " + country;
        tempEl.textContent = temp + "°C";
        windEl.textContent = speed + "m/s";
        humidityEl.textContent = humidity + "%";
        hiLowEl.textContent = `${temp_max}°/ ${temp_min}°`;
        pressureEl.textContent = `${pressure} Pa`
        sunRiseEl.textContent = `${window.moment(sunrise * 1000).format("HH:mm a")}`
        sunSetEl.textContent = `${window.moment(sunset * 1000).format("HH:mm a")}`
        remarkEl.textContent = description;
        iconEl.src="https://openweathermap.org/img/wn/" + icon + "@4x.png"
        
        
    },
    
    search: function () {
        this.fetchWeather(document.querySelector(".search-content").value)
    }



};

document
    .querySelector(".search button")
    .addEventListener("click", function () { 
        weather.search();
    }); 


   let api_key = '&APPID=3125b25991c8211287d997d5267df890'

function getEachWeather(city) {
        
    fetch(
        "https://api.openweathermap.org/data/2.5/weather?q=" + city + "&units=metric" + api_key).then((response) => response.json()).then(datass => { eachCountry (datass)} )

}
    


 function eachCountry (datass) {
           
    
                let { name } = datass;
                const { icon, description } = datass.weather[0];
                const { temp, humidity, temp_min, temp_max, pressure } = datass.main;
                const { country, sunrise, sunset } = datass.sys;
                const { speed } = datass.wind;
                console.log(name, icon, description, temp, humidity, speed);
            
                weatherTitleEl1.innerText = "Weather for " + name;
                placeEl1.textContent = name + ", " + country;
                tempEl1.textContent = temp + "°C";
                windEl1.textContent = speed + "m/s";
                humidityEl1.textContent = humidity + "%";
                hiLowEl1.textContent = `${temp_max}°/ ${temp_min}°`;
                pressureEl1.textContent = `${pressure} Pa`
                sunRiseEl1.textContent = `${window.moment(sunrise * 1000).format("HH:mm a")}`
                sunSetEl1.textContent = `${window.moment(sunset * 1000).format("HH:mm a")}`
                remarkEl1.textContent = description;
                iconEl1.src = "https://openweathermap.org/img/wn/" + icon + "@4x.png"
        
            
}
     
function displayResult(i) {
           
            getEachWeather(document.querySelector(`#valz${i}`).value)
} 


function getResult() {
    for (var i = 0; i < 120; i++) {
        let usingu = `#valz${i}`

        if (usingu != "#valz3") {
            
            displayResult(i);
            
        } 
       

       
       
       
    }
}







// let result = {
    
//     api_key1: '&APPID=3125b25991c8211287d997d5267df890',

//     fetcheachCountry: function (particularCountry) {
//         fetch(
//             "https://api.openweathermap.org/data/2.5/weather?q=" + particularCountry + "&units=metric" + this.api_key1
//         )
//             .then((response) => response.json())
//             .then((datass) => this.eachCountry(datass));
        
//     },
    
//     eachCountry: function (datass) {
//         // for (let i = 0; i < 1; i++) {

//             let { name } = datass;
//             const { icon, description } = datass.weather[0];
//             const { temp, humidity, temp_min, temp_max, pressure } = datass.main;
//             const { country, sunrise, sunset } = datass.sys;
//             const { speed } = datass.wind;
//             console.log(name, icon, description, temp, humidity, speed);
        
//             weatherTitleEl1.innerText = "Weather for " + name;
//             placeEl1.textContent = name + ", " + country;
//             tempEl1.textContent = temp + "°C";
//             windEl1.textContent = speed + "m/s";
//             humidityEl1.textContent = humidity + "%";
//             hiLowEl1.textContent = `${temp_max}°/ ${temp_min}°`;
//             pressureEl1.textContent = `${pressure} Pa`
//             sunRiseEl1.textContent = `${window.moment(sunrise * 1000).format("HH:mm a")}`
//             sunSetEl1.textContent = `${window.moment(sunset * 1000).format("HH:mm a")}`
//             remarkEl1.textContent = description;
//             iconEl1.src = "https://openweathermap.org/img/wn/" + icon + "@4x.png"
        
//             // const { EnglishName, WeatherText, WeatherIcon, Key } = datass[i];
//             // const { Value } = datass[i].Temperature.Metric;
//             // const { ID } = datass[i].Country;
       
    
    
//             // // EnglishName += datass[i]
//             // // const { country, sunrise, sunset } = data.sys;
//             // // const { speed } = data.wind;
//             // // console.log(EnglishName, WeatherIcon, WeatherText, Value, ID, Key);

//             // weatherTitleEl1.innerText = "Weather for " + EnglishName;
//             // placeEl1.textContent = EnglishName + ", " + ID;
//             // tempEl1.textContent = Value + "°C";
//             // remarkEl1.textContent = WeatherText;
        
//     },

//     displayResult: function () {
//         for (let i = 0; i < 1; i++) {

//             this.fetcheachCountry(document.querySelector(`#valz${i}`).value);

//             //         function somefunc(index) {
//             //             this.fetcheachCountry(document.querySelector(`#valz${index}`).value);
//             //         }

//             //         somefunc(i)

//             //     }s
    


//             // }.bind(this)
        
        
        
        
        
        
        
        
//         }
//     }



// }













                
// let el = document.getElementById("valz")

// function idekagain() {
    // for (var i = 0; i < 2; i++) {

                
        
       
    //         displayResult(i);
    
    
        
       
    //     // let usingu =
    //     // if (i = usingu) {
    //     //     break;
    //     // }
    // }



    
// }

    
    
    
    
// document
// .querySelector(".search button")
// .addEventListener("click", function () {
//     weather.search();
// });
// }
// for (let i = 0; i < 120; i++) {

//     document.querySelector(`#valz${i} button`).addEventListener("click", function () {
    
    
//         displayResult(i);
    
//     });
    
// }
// document.getElementById("valz1").addEventListener("click", function () {
    
    
//     displayResult();
    
//     });

   //  function displayResult () {
        //     for (let i = 0; i < 120; i++) {
    
        //         // this.fetcheachCountry(document.querySelector(`#valz${i}`).value);
    
        //                 function somefunc(index) {
        //                     getEachWeather(document.querySelector(`#valz${index}`).value);
        //                 }
    
        //                 somefunc(i)
    
        //             }
        
    
    
        //         } 

