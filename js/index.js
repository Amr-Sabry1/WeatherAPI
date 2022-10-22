async function search(a) {
    let weatherApi = await fetch(`http://api.weatherapi.com/v1/forecast.json?key=5940697e96db4423bcd115809221510&q=${a}&days=7`)
    if (weatherApi.status != 400) {
        let myhttp = await weatherApi.json();
        console.log(myhttp.current.condition.icon);
        displayDays(myhttp);


    }
}
document.getElementById("search").addEventListener("keyup", a => { search(a.target.value) });
let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
let monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

search("cairo")

function displayDays(a) {
    var day1 = new Date(a.current.last_updated);
    var day2 = new Date(a.forecast.forecastday[1].date);
    var day3 = new Date(a.forecast.forecastday[2].date);
    var day4 = new Date(a.forecast.forecastday[3].date);
    var day5 = new Date(a.forecast.forecastday[4].date);

    document.getElementById("showDay").innerHTML = ` 
       <div class="col-md-4 col-md-12 col-lg-4  day text-white">
                <div class="py-3">
                    <div class="d-flex flex-column  text-center  mt-3 mb-4 ">
                        <h1 class="fw-bolder bg-opacity-25 fs-2 rounded-4 mb-3 p-1 bg-white town">${a.location.name}</h1>
                        <p>${days[day1.getDay()]},${day1.getDate()}
                        <span>${monthNames[day1.getMonth()]}</span>
                        </p>
                    </div>

                    <div class="d-flex justify-content-around align-items-center">
                        <div>
                            <h2>${a.current.temp_c}<sup>o</sup>C</h2>
                            <h6><span class="text-warning">FeelsLike</span> : ${a.current.feelslike_c}<sup>o</sup>C</h4>
                            
                            <p class="status bg-white bg-opacity-10 p-1 rounded-3 text-center">${a.current.condition.text}</p>
                        </div>
                        <div>
                            <img src="https:/${a.current.condition.icon}" class="weatherIcon" alt="">
                        </div>
                    </div>


                    <div class="icon d-flex justify-content-around py-4 mt-4">
                        <div><img src=".//images/icon-umberella.png" class="me-2" alt="">${a.current.humidity}%</div>
                        <div><img src=".//images/icon-wind.png"   alt="">  ${a.current.wind_kph}km/h</div>
                        <div><img src=".//images/icon-compass.png"   alt=""> ${a.current.wind_dir}</div>
                    </div>
                </div>     </div>



                <div class="col-6 col-md-3 col-lg-2  text-center day0 text-white">
                     <div class="d-flex flex-column text-center   mt-5 ">
                 <h3 class="fw-bolder fs-5">${days[day2.getDay()]}</h3>
                    <span>${day2.getDate()}, ${monthNames[day2.getMonth()]}</span>
                </div>
                <div class=" justify-content-around align-items-center">
                    <div>
                        <img src="https:/${a.forecast.forecastday[1].day.condition.icon}" class="py-3" alt="">
                        <div class="py-3">
                            <h3>${a.forecast.forecastday[1].day.maxtemp_c}<sup>o</sup>C</h3>
                            <p>${a.forecast.forecastday[1].day.mintemp_c}<sup>o</sup>C</p>
                            <p class="status">${a.forecast.forecastday[1].day.condition.text}</p>
                        </div>
                    </div>
                </div>
            </div>
            </div>


              <div class="col-6 col-md-3 col-lg-2  text-center day0 text-white">
                <div class="d-flex flex-column text-center  mt-5 ">
                  <h3 class="fw-bolder fs-5">${days[day3.getDay()]}</h3>
                    <span>${day3.getDate()}, ${monthNames[day3.getMonth()]}</span>
                </div>
                <div class=" justify-content-around align-items-center">
                    <div>
                        <img src="https:/${a.forecast.forecastday[2].day.condition.icon}" class="py-3" alt="">
                        <div class="py-3">
                            <h3>${a.forecast.forecastday[2].day.maxtemp_c}<sup>o</sup>C</h3>
                            <p>${a.forecast.forecastday[2].day.mintemp_c}<sup>o</sup>C</p>
                            <p class="status">${a.forecast.forecastday[2].day.condition.text}</p>
                        </div>
                    </div>
                </div>
            </div>
            </div>



              <div class="col-6 col-md-3 col-lg-2  text-center day0 text-white">
                <div class="d-flex flex-column text-center  mt-5 ">
                  <h3 class="fw-bolder fs-5">${days[day4.getDay()]}</h3>
                    <span>${day4.getDate()}, ${monthNames[day4.getMonth()]}</span>
                </div>
                <div class=" justify-content-around align-items-center">
                    <div>
                        <img src="https:/${a.forecast.forecastday[3].day.condition.icon}" class="py-3" alt="">
                        <div class="py-3">
                            <h3>${a.forecast.forecastday[3].day.maxtemp_c}<sup>o</sup>C</h3>
                            <p>${a.forecast.forecastday[3].day.mintemp_c}<sup>o</sup>C</p>
                            <p class="status">${a.forecast.forecastday[3].day.condition.text}</p>
                        </div>
                    </div>
                </div>
            </div>


            
            </div>  <div class="col-6 col-md-3 col-lg-2  text-center day0 text-white">
                <div class="d-flex flex-column text-center  mt-5 ">
                  <h3 class="fw-bolder fs-5">${days[day5.getDay()]}</h3>
                    <span>${day5.getDate()}, ${monthNames[day5.getMonth()]}</span>
                </div>
                <div class=" justify-content-around align-items-center">
                    <div>
                        <img src="https:/${a.forecast.forecastday[4].day.condition.icon}" class="py-3" alt="">
                        <div class="py-3">
                            <h3>${a.forecast.forecastday[4].day.maxtemp_c}<sup>o</sup>C</h3>
                            <p>${a.forecast.forecastday[4].day.mintemp_c}<sup>o</sup>C</p>
                            <p class="status">${a.forecast.forecastday[4].day.condition.text}</p>
                        </div>
                    </div>
                </div>
            </div>
            </div>
       `
}