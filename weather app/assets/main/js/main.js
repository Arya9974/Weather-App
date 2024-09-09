let valeusearch = document.getElementById('valeusearch');
let city = document.getElementById('city');
let temp = document.getElementById('temp');
let desceription = document.querySelector('.description')
let clouds = document.getElementById('clouds')
let humidity = document.getElementById('humidity')
let pressure = document.getElementById('pressure')
let form = document.querySelector('form')
let main = document.querySelector('main')
form.addEventListener('submit', (event) => {
    event.preventDefault();
    if (valeusearch.value != '') {
        searchWeather();
    }
})

let id = 'fff6238b9b03d8dc9c297487b5adad14';


let url = 'https://api.openweathermap.org/data/2.5/weather?units=metric&appid=' + id;

const searchWeather = () => {

    fetch(url + '&q=' + valeusearch.value)
        .then(responsive => responsive.json())
        .then(data => {
            console.log(data);
            if (data.cod == 200) {
                city.querySelector('figcaption').innerText = data.name;
                city.querySelector('img').src = `https://flagsapi.com/${data.sys.country}/shiny/32.png`;

                temp.querySelector('img').src = `https://openweathermap.org/img/wn/${data.weather[0].icon}@4x.png`;
                temp.querySelector('figcaption span').innerText = data.main.temp;
                desceription.innerText = data.weather[0].desceription;
                clouds.innerText = data.clouds.all;
                humidity.innerText = data.main.humidity;
                pressure.innerText = data.main.pressure


            } else {
                //false
                main.classList.add('error');
                setTimeout(() => {
                    main.classList.remove('error')
                }
                ,1000)
            }

            valeusearch.value = '';

        })
}

const initapp = () => {
    valeusearch.value = 'Tehran'
    searchWeather();
}

initapp(); 