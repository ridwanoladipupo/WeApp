const timeEl = document.getElementById("time")
const dateEl = document.getElementById("date")
// const hoursEl = document.getElementById("sixty")
const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
const firstEl = document.getElementById("first-hour")
const secondEl = document.getElementById("second-hour")
const thirdEl = document.getElementById("third-hour")
const fourthEl = document.getElementById("fourth-hour")

const time = new Date();
const hours = time.getHours()
const hrs24 = hours;


let locationEl = document.getElementById("location")

setInterval(() => {
    const time = new Date();
    const month = time.getMonth();
    const years = time.getFullYear();
    const date = time.getDate();
    const hour = time.getHours();
    const day = time.getDay();
    const minutes = time.getMinutes();
    const ampm = hour >= 12 ? 'PM' : 'AM'
    // const hoursIn24hrFormat = hour


    // timeEl.innerHTML = hoursIn24hrFormat + ':' + minutes + '' + `<span id="am-pm"> ${ampm}</span>`
    timeEl.innerHTML = (hour < 10 ? '0' + hour : hour) + ':' + (minutes < 10 ? '0' + minutes : minutes) + ' ' + `<span id="am-pm">${ampm}</span>`
    dateEl.innerHTML = days[day] + ', ' + date + ' ' + months[month] + " " + years
}, 10);

setInterval(() => {
    const time = new Date();
    const hour = time.getHours();
    // let ampm
    const hoursIn24hrFormat = hour
    const ampm = hour >= 12 ? 'PM' : 'AM'

    // if (hour >= 12) {
    //     ampm = "PM"
    // } else {
    //     ampm = "AM"
    // }

    firstEl.innerHTML = `${hoursIn24hrFormat + 1}<span id="am-pm"> ${ampm}</span>`
}, 10);

setInterval(() => {
    const time = new Date();
    const hour = time.getHours();
    const ampm = hour >= 12 ? 'PM' : 'AM'
    const hoursIn24hrFormat = hour

    secondEl.innerHTML = `${hoursIn24hrFormat + 2}` + `<span id="am-pm"> ${ampm}</span>`
}, 10);

setInterval(() => {
    const time = new Date();
    const hour = time.getHours();
    const ampm = hour >= 12 ? 'PM' : 'AM'
    const hoursIn24hrFormat = hour

    thirdEl.innerHTML = `${hoursIn24hrFormat + 3}` + `<span id="am-pm"> ${ampm}</span>`
}, 10);

setInterval(() => {
    const time = new Date();
    const hour = time.getHours();
    const ampm = hour >= 12 ? 'PM' : 'AM'
    const hoursIn24hrFormat = hour

    fourthEl.innerHTML = `${hoursIn24hrFormat + 4}` + `<span id="am-pm"> ${ampm}</span>`
}, 10);

let weather = {
    API_KEY: 'a97a1d104f9476af1023b6d871003eb9',
    fetchWeather: function (city) {
        fetch(
            "https://api.openweathermap.org/data/2.5/weather?q="
            + city
            + "&units=metric&appid="
            + this.API_KEY
        )
            .then((response) => response.json())
            .then((data) => this.displayWeather(data));
    },
    displayWeather: function (data) {
        const { name } = data;
        const { icon, description } = data.weather[0];
        const { temp, humidity, temp_min, temp_max, pressure } = data.main;
        const { speed } = data.wind;
        const { sunrise, sunset, country } = data.sys;
        console.log(name, icon, description, temp, humidity, speed, temp_min, temp_max, sunrise, sunset, country, pressure);
        document.querySelector(".location").innerText = name + ", " + country;
        document.querySelector(".today-sun").src = "http://openweathermap.org/img/wn/" + icon + "@2x.png"
        document.querySelector(".remark").innerHTML = `${description[0].toUpperCase()}${description.slice(1)}`
        document.querySelector(".day-temp").innerText = Math.floor(temp) + '°';
        document.querySelector(".wind").innerText = `${Math.floor(speed * 3.6)}` + 'km/h';
        document.querySelector(".humidity").innerText = humidity + '%';
        document.querySelector(".high-low").innerText = Math.floor(temp_max) + '°/' + Math.floor(temp_min) + '°';
        document.querySelector(".pressure").innerText = pressure + 'hPa';
        document.querySelector(".sunrise").innerText = `${window.moment(sunrise * 1000).format("HH:mm a")}`;
        document.querySelector(".sunset").innerText = `${window.moment(sunset * 1000).format("HH:mm a")}`;
    },
    search: function () {
        this.fetchWeather(document.querySelector(".search-bar").value);
    },
};

document.querySelector(".search button").addEventListener("click", function () {
    weather.search();
});

document.querySelector(".search-bar").addEventListener("keyup", function (event) {
    if (event.key == "Enter") {
        weather.search();
    }
});


// "https://api.weatherbit.io/v2.0/history/hourly?&city=lagos&start_date=2022-03-31&end_date=2022-04-01&tz=local&key=063c3486a1714bb98e5ae5ada544cab6"
//     + this.api_key





// visualcrossing api key: ZMV9HEXU664HPKVSRNLB93LQE

// https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/Lagos,NG/2022-03-31T13:00:00?key=ZMV9HEXU664HPKVSRNLB93LQE&unitGroup=metric

// https://api.openweathermap.org/data/2.5/forecast?q=lagos&units=metric&appid=a97a1d104f9476af1023b6d871003eb9
let icon = {
    api_KEY: 'a97a1d104f9476af1023b6d871003eb9',
    fetchIcon: function (city) {
        fetch("https://api.openweathermap.org/data/2.5/forecast?q="
            + city
            + "&units=metric&appid="
            + this.api_KEY
        )
            .then((response) => response.json())
            .then((dataas) => this.displayIcon(dataas));
    },
    displayIcon: function (dataas) {
        for (let i = 8; i <= 24; i += 8) {
            if (i === 8) {
                let { icon, description } = dataas.list[i].weather[0]
                document.querySelector(".day-one").src = "http://openweathermap.org/img/wn/" + icon + "@2x.png"
                document.querySelector(".day1-remark").innerText = `${description[0].toUpperCase()}${description.slice(1)}`;
            }
            else if (i === 16) {
                let { icon, description } = dataas.list[i].weather[0]
                document.querySelector(".day-two").src = "http://openweathermap.org/img/wn/" + icon + "@2x.png"
                document.querySelector(".day2-remark").innerText = `${description[0].toUpperCase()}${description.slice(1)}`;
            }

            else if (i === 24) {
                let { icon, description } = dataas.list[i].weather[0]
                document.querySelector(".day-three").src = "http://openweathermap.org/img/wn/" + icon + "@2x.png"
                document.querySelector(".day3-remark").innerText = `${description[0].toUpperCase()}${description.slice(1)}`;
            }
        }
    },
    search: function () {
        this.fetchIcon(document.querySelector(".search-bar").value);
    },
};

document.querySelector(".search button").addEventListener("click", function () {
    icon.search();
});

document.querySelector(".search-bar").addEventListener("keyup", function (event) {
    if (event.key == "Enter") {
        icon.search();
    }
});


// https://api.weatherbit.io/v2.0/forecast/hourly?city=Raleigh,NC&key=API_KEY&hours=48
let hour = {
    api_key: '063c3486a1714bb98e5ae5ada544cab6',
    fetchTemp: function (city) {
        fetch(
            "https://api.weatherbit.io/v2.0/forecast/hourly?city="
            + city
            + "&key="
            + this.api_key
            + "&hours=48"
        )
            .then((response) => response.json())
            .then((datas) => this.displayTemp(datas));
    },
    displayTemp: function (datas) {
        for (let i = 0; i <= 3; i++) {
            if (i === 0) {
                let { temp, clouds, uv } = datas.data[i];
                let { description } = datas.data[i].weather;
                document.querySelector(".first-remark").innerText = description;
                document.querySelector(".first-temp").innerText = Math.floor(temp) + '°';
                document.querySelector(".first-cloud").innerText = clouds + '%';
                document.querySelector(".first-uv").innerText = Math.floor(uv) + ' out of 10';
            }
            else if (i === 1) {
                let { temp, clouds, uv } = datas.data[i];
                let { description } = datas.data[i].weather;
                document.querySelector(".second-remark").innerText = description;
                document.querySelector(".second-temp").innerText = Math.floor(temp) + '°';
                document.querySelector(".second-cloud").innerText = clouds + '%';
                document.querySelector(".second-uv").innerText = Math.floor(uv) + ' out of 10';
            }
            else if (i === 2) {
                let { temp, clouds, uv } = datas.data[i];
                let { description } = datas.data[i].weather;
                document.querySelector(".third-remark").innerText = description;
                document.querySelector(".third-temp").innerText = Math.floor(temp) + '°';
                document.querySelector(".third-cloud").innerText = clouds + '%';
                document.querySelector(".third-uv").innerText = Math.floor(uv) + ' out of 10';
            }
            else if (i === 3) {
                let { temp, clouds, uv } = datas.data[i];
                let { description } = datas.data[i].weather;
                document.querySelector(".fourth-remark").innerText = description;
                document.querySelector(".fourth-temp").innerText = Math.floor(temp) + '°';
                document.querySelector(".fourth-cloud").innerText = clouds + '%';
                document.querySelector(".fourth-uv").innerText = Math.floor(uv) + ' out of 10';
            }
        }
    },
    search: function () {
        this.fetchTemp(document.querySelector(".search-bar").value);
    },
};

document.querySelector(".search button").addEventListener("click", function () {
    hour.search();
});

document.querySelector(".search-bar").addEventListener("keyup", function (event) {
    if (event.key == "Enter") {
        hour.search();
    }
});


// http://api.weatherapi.com/v1/forecast.json?key=8a51bec509ac40fd856133327223003&q=Lagos&days=3&aqi=no&alerts=no
let day = {
    api_key: '063c3486a1714bb98e5ae5ada544cab6',
    fetchDay: function (city) {
        fetch(
            "https://api.weatherbit.io/v2.0/forecast/daily?city="
            + city
            + "&key="
            + this.api_key
        )
            .then((response) => response.json())
            .then((datass) => this.displayDay(datass));
    },
    displayDay: function (datass) {
        for (let i = 1; i <= 3; i++) {
            if (i === 1) {
                let { temp, wind_spd, datetime, sunrise_ts, sunset_ts, pres, rh } = datass.data[i];
                document.querySelector(".day1-temp").innerText = Math.floor(temp) + '°';
                document.querySelector(".day1-wind").innerText = Math.floor(wind_spd * 3.6) + 'km/h';
                document.querySelector(".day1-humidity").innerText = Math.floor(rh) + '%';
                document.querySelector(".day1-pressure").innerText = Math.floor(pres) + 'hPa';
                document.querySelector(".day1-sunrise").innerText = `${window.moment(sunrise_ts * 1000).format("HH:mm a")}`;
                document.querySelector(".day1-sunset").innerText = `${window.moment(sunset_ts * 1000).format("HH:mm a")}`;
                document.querySelector(".day1-date").innerText = datetime;
            }
            else if (i === 2) {
                let { temp, wind_spd, datetime, sunrise_ts, sunset_ts, pres, rh } = datass.data[i];
                document.querySelector(".day2-temp").innerText = Math.floor(temp) + '°';
                document.querySelector(".day2-wind").innerText = Math.floor(wind_spd * 3.6) + 'km/h';
                document.querySelector(".day2-humidity").innerText = Math.floor(rh) + '%';
                document.querySelector(".day2-pressure").innerText = Math.floor(pres) + 'hPa';
                document.querySelector(".day2-sunrise").innerText = `${window.moment(sunrise_ts * 1000).format("HH:mm a")}`;
                document.querySelector(".day2-sunset").innerText = `${window.moment(sunset_ts * 1000).format("HH:mm a")}`;
                document.querySelector(".day2-date").innerText = datetime;
            }
            else if (i === 3) {
                let { temp, wind_spd, datetime, sunrise_ts, sunset_ts, pres, rh } = datass.data[i];
                document.querySelector(".day3-humidity").innerText = Math.floor(rh) + '%';
                document.querySelector(".day3-temp").innerText = Math.floor(temp) + '°';
                document.querySelector(".day3-wind").innerText = Math.floor(wind_spd * 3.6) + 'km/h';
                document.querySelector(".day3-pressure").innerText = Math.floor(pres) + 'hPa';
                document.querySelector(".day3-sunrise").innerText = `${window.moment(sunrise_ts * 1000).format("HH:mm a")}`;
                document.querySelector(".day3-sunset").innerText = `${window.moment(sunset_ts * 1000).format("HH:mm a")}`;
                document.querySelector(".day3-date").innerText = datetime;
            }
        }
    },
    search: function () {
        this.fetchDay(document.querySelector(".search-bar").value);
    },
};
document.querySelector(".search button").addEventListener("click", function () {
    day.search();
});

document.querySelector(".search-bar").addEventListener("keyup", function (event) {
    if (event.key == "Enter") {
        day.search();
    }
});


// https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/Lagos/next3days?key=ZMV9HEXU664HPKVSRNLB93LQE

// http://openweathermap.org/img/wn/04d@2x.png