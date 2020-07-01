import React from "react";
import "./weather.css";

function Weather({countryName,cityName, description, temp,icon, maxTemp, minTemp}) {

    return (
        <div className="weather-card rounded">
            <div>
                <h1 className="primary-font text-center">{cityName}, {countryName}</h1>
                {/* <p className="numeric-font text-center">Mon, 2:25 PM</p> */}
                <div className="container row flex-column pl-5">
                    <div className="row d-flex justify-content-start mt-5">
                        <img src={`https://openweathermap.org/img/wn/${icon}@2x.png`} alt="icon"/>
                        <h2 className="sub-heading my-auto text-capitalize">{description} </h2>
                    </div>
                    <div className="row">
                        <div className="col-6 ">
                            <h1 className="large-heading numeric-font">{Math.round(temp)}&deg;</h1>
                        </div>
                        <div className="col-6 d-flex justify-content-end align-items-center">
                            <div>
                                <p className="temp-font border-bottom m-0 p-0">{Math.round(maxTemp)}&deg;C</p>
                                <p className="temp-font m-0 p-0">{Math.round(minTemp)}&deg;C</p>
                            </div>
                        </div>
                    </div>
                    <div className="row d-flex justify-content-center align-items-center mb-2 ">
                        {/* <div>
                            <p className="temp-font border-bottom m-0 p-0"><span><i class="fas fa-sun"></i></span>{sunriseTime}</p>
                            <p className="temp-font m-0 p-0"><span><i class="fas fa-moon"></i></span>{sunsetTime}</p>
                        </div> */}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Weather;