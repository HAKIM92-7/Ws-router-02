import React ,{useEffect, useState} from 'react'
import './Weather.css'
import axios from 'axios'

const Weather = ({match}) => {

    useEffect(() => {

    axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${match.params.city}&appid=cb996654923fa02faf2f29c548846158`) 
    .then((res) => setWeatherData(res.data))
    .catch((err) => console.log(err))

     
    }, [])
  

const [weatherData , setWeatherData] = useState(null)

const [city , setCity] = useState("")


// var aujourdhui = new Date();
// var str = aujourdhui.toGMTString().toString(); 

// var time = `${str.getHours()+ weatherData.timezone/3600} : ${str.getMinutes()} `




    return (
        <div>


<form  onSubmit={(e) => {

e.preventDefault();

axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=cb996654923fa02faf2f29c548846158`) 
    .then((res) => setWeatherData(res.data))
    .catch((err) => console.log(err))



}} >

<input type="text" value={city}  onChange={(e) => setCity(e.target.value)} />
 
 <button type="submit"  > Search</button>

</form>

{ weatherData ?



<div class="container-fluid">
    <div class="row justify-content-center">
        <div class="col-12 col-md-4 col-sm-12 col-xs-12">
            <div class="card p-4">
                <div class="d-flex">
                    <h6 class="flex-grow-1">{weatherData.name}</h6>
                    <h6>{new Date().toString()}</h6>
                </div>
                <div class="d-flex flex-column temp mt-5 mb-3">
                    <h1 class="mb-0 font-weight-bold" id="heading"> {Math.round(weatherData.main.temp-273.15)}° C </h1> <span class="small grey">Stormy</span>
                </div>
                <div class="d-flex">
                    <div class="temp-details flex-grow-1">
                        <p class="my-1"> <img src="https://i.imgur.com/B9kqOzp.png" height="17px"/> <span> {weatherData.wind.speed}km/h </span> </p>
                        <p class="my-1"> <i class="fa fa-tint mr-2" aria-hidden="true"></i> <span> {weatherData.main.humidity}% </span> </p>
                        <p class="my-1"> <img src="https://i.imgur.com/wGSJ8C5.png" height="17px"/> <span> 0.2h </span> </p>
                    </div>
                    <div> <img src="https://i.imgur.com/Qw7npIg.png" width="100px"/> </div>
                </div>
            </div>
        </div>
    </div>
</div> : <div class="spinner-border" role="status">
  <span class="visually-hidden">Loading...</span>
</div>


}
            
        </div>
    )
}

export default Weather
