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


let placeEl2 = document.getElementById("place2")
let tempEl2 = document.getElementById("temp2")
let windEl2 = document.getElementById("wind-speed2")
let humidityEl2 = document.getElementById("humidity2")
let hiLowEl2 = document.getElementById("hi-low2")
let pressureEl2 = document.getElementById("pressure2")
let sunRiseEl2 = document.getElementById ("sun-rise2")
let sunSetEl2 = document.getElementById("sun-set2")
let remarkEl2 = document.getElementById("remark2")
let iconEl2 = document.getElementById("today-sun2")

let placeEl3 = document.getElementById("place3")
let tempEl3 = document.getElementById("temp3")
let windEl3 = document.getElementById("wind-speed3")
let humidityEl3 = document.getElementById("humidity3")
let hiLowEl3 = document.getElementById("hi-low3")
let pressureEl3 = document.getElementById("pressure3")
let sunRiseEl3 = document.getElementById ("sun-rise3")
let sunSetEl3 = document.getElementById("sun-set3")
let remarkEl3 = document.getElementById("remark3")
let iconEl3 = document.getElementById("today-sun3")

let timeEl1 = document.getElementById("time1")
let timeEl = document.getElementById("time")
let timeEl2 = document.getElementById("time2")
let timeEl3 = document.getElementById("time3")

// const timeEl = document.getElementById("time")
// const dateEl = document.getElementById("date")
// const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
// const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
// setInterval(() => {
//     const time = new Date();
//     const month = time.getMonth();
//     const date = time.getDate();
//     const hour = time.getHours();
//     const day = time.getDay();
//     const minutes = time.getMinutes();
//     const ampm = hour >= 12 ? 'PM' : 'AM'
//     const hoursIn12hrFormat = hour >= 13 ? hour % 12 : hour
//     timeEl.innerHTML = hoursIn12hrFormat + ':' + minutes + '' + `<span id="am-pm"> ${ampm}</span>`
//     dateEl.textContent = days[day] + ', ' + date + ' ' + months[month]
// }, 10);


    
 






let countries = {
 
    fetchCountry: function () {
        fetch(
            "http://dataservice.accuweather.com/locations/v1/topcities/150?apikey=cbLAaHSHonJaMOpUhrU1GIWWypF7QonV&language=en-us&details=true")
            .then((response) => response.json())
            .then((datas) => this.showCountry(datas));
    },
    
    showCountry: function (datas) {
        
        for (let i = 0; i <= 120; i++) {
            if (i < 30) {
                document.getElementById("app").innerHTML += `<button  class="mb-2 ex-button ex-block "  onclick="getResult()" id="valz" value= "${datas[i].EnglishName}">  ${datas[i].EnglishName}, ${datas[i].Country.ID} </button>`
            } else if (i > 29 && i < 60) {
                document.getElementById("app2").innerHTML += `<button class="mb-2  ex-button ex-block " onclick="getResult()"  id="valz" value= "${datas[i].EnglishName}">${datas[i].EnglishName}, ${datas[i].Country.ID}</button>`
            }
            else if (i > 59 && i < 90) {
                document.getElementById("app3").innerHTML += `<button class="mb-2 ex-button ex-block  " onclick="getResult()"  id="valz" value= "${datas[i].EnglishName}" >${datas[i].EnglishName}, ${datas[i].Country.ID}</button>`
            }
            else if (i > 89 && i < 120) {
                document.getElementById("app4").innerHTML += `<button class="mb-2 ex-button ex-block "  onclick="getResult()" id="valz" value= "${datas[i].EnglishName}" >${datas[i].EnglishName}, ${datas[i].Country.ID}</button>`
            }
        }
    },
};
// $(document).on("click", "#valz", function() {
//     getResult();
//     // $('#searchModal').modal('show')
//   });



    function getResult(){
 
        $('#app button').click(function (e) {
        
        displayResult($(this).attr('value'))
        $('#lstodal').modal('show')
        
    });
    
    $('#app2 button').click(function(e) {
        
        displayResult($(this).attr('value'))
        $('#lstodal').modal('show')
    });
    $('#app3 button').click(function(e) {
        
        displayResult($(this).attr('value'))
        $('#lstodal').modal('show')
    });
    $('#app4 button').click(function(e) {
        
        displayResult($(this).attr('value'))
        $('#lstodal').modal('show')
    });
        
        
}

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
        
        let { name, timezone } = data;
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
        timeEl.innerHTML = `${window.moment(timezone * 1000).format("HH:mm a")}` 
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

document
    .querySelector(".search-content").addEventListener("keyup", function (event) { 
     
        if (event.key == "Enter") {
            weather.search();
            $('#searchModal').modal('show')
        }
    }); 

    let result
   let api_key = '&APPID=3125b25991c8211287d997d5267df890'


function getEachWeather(city) {
        
    fetch(
        "https://api.openweathermap.org/data/2.5/weather?q=" + city + "&units=metric" + api_key).then((response) => response.json()).then(datass => { eachCountry (datass)} )

}
    


 function eachCountry (datass) {
           
    
                let { name, timezone } = datass;
                const { icon, description } = datass.weather[0];
                const { temp, humidity, temp_min, temp_max, pressure } = datass.main;
                const { country, sunrise, sunset } = datass.sys;
                const { speed } = datass.wind;
                console.log(name, icon, description, temp, humidity, speed, timezone);
            
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
     timeEl1.textContent= `${window.moment.utc().add(timezone, 's').format("HH:mm a")}`
        
}
     
function displayResult(ixy) {
           
            getEachWeather(ixy)
} 



       
let weather2 = {
    api_key: '&APPID=3125b25991c8211287d997d5267df890',
    fetchWeatherCompare: function (city) {
        fetch(
            "https://api.openweathermap.org/data/2.5/weather?q=" + city + "&units=metric" + this.api_key
        )
            .then((response) => response.json())
            .then((datasss) => this.displayWeatherCompare(datasss));
           
    },
    
    displayWeatherCompare: function (datasss) {
        let { name, timezone } = datasss;
        const { icon, description } = datasss.weather[0];
        const { temp, humidity, temp_min, temp_max, pressure } = datasss.main;
        const { country, sunrise, sunset } = datasss.sys;
        const { speed } = datasss.wind;
        console.log(name, icon, description, temp, humidity, speed);
        
        placeEl2.textContent = name + ", " + country;
        tempEl2.textContent = temp + "°C";
        windEl2.textContent = speed + "m/s";
        humidityEl2.textContent = humidity + "%";
        hiLowEl2.textContent = `${temp_max}°/ ${temp_min}°`;
        pressureEl2.textContent = `${pressure} Pa`
        sunRiseEl2.textContent = `${window.moment(sunrise * 1000).format("HH:mm a")}`
        sunSetEl2.textContent = `${window.moment(sunset * 1000).format("HH:mm a")}`
        remarkEl2.textContent = description;
        iconEl2.src="https://openweathermap.org/img/wn/" + icon + "@4x.png"
        timeEl2.textContent= `${window.moment.utc().add(timezone, 's').format("HH:mm a")}`
        
    },
    
    searchCompare: function () {
        this.fetchWeatherCompare(document.querySelector(".searchh-content2").value)
    }



};


let weather3 = {
    api_key: '&APPID=3125b25991c8211287d997d5267df890',
    fetchWeatherCompare1: function (city) {
        fetch(
            "https://api.openweathermap.org/data/2.5/weather?q=" + city + "&units=metric" + this.api_key
        )
            .then((response) => response.json())
            .then((datassss) => this.displayWeatherCompare1(datassss));
           
    },
    
    displayWeatherCompare1: function (datassss) {
        let { name, timezone } = datassss;
        const { icon, description } = datassss.weather[0];
        const { temp, humidity, temp_min, temp_max, pressure } = datassss.main;
        const { country, sunrise, sunset } = datassss.sys;
        const { speed } = datassss.wind;
        console.log(name, icon, description, temp, humidity, speed);
        
        placeEl3.textContent = name + ", " + country;
        tempEl3.textContent = temp + "°C";
        windEl3.textContent = speed + "m/s";
        humidityEl3.textContent = humidity + "%";
        hiLowEl3.textContent = `${temp_max}°/ ${temp_min}°`;
        pressureEl3.textContent = `${pressure} Pa`
        sunRiseEl3.textContent = `${window.moment(sunrise * 1000).format("HH:mm a")}`
        sunSetEl3.textContent = `${window.moment(sunset * 1000).format("HH:mm a")}`
        remarkEl3.textContent = description;
        iconEl3.src="https://openweathermap.org/img/wn/" + icon + "@4x.png"
        timeEl3.textContent= `${window.moment.utc().add(timezone, 's').format("HH:mm a")}`

        
    },
    
    searchCompare1: function () {
        this.fetchWeatherCompare1(document.querySelector(".searchh-content3").value)
    }



};

document
    .querySelector(".searchh2 button")
    .addEventListener("click", function () { 
        weather3.searchCompare1();
        weather2.searchCompare()

    }); 
       