import SearchBox from "./searchBox";
import InfoBox from "./infoBox"
import { useState } from "react";

export default function WeatherApp(){
    const [weatherInfo,setWeatherInfo]=useState({
        city:"Delhi",
        feelslike:24.84,
        temp:25.05,
        tempMin:25.05,
        tempMax:25.05,
        humidity:47,
        weather:"haze",
    });

    let updateInfo= (newinfo)=>{
        setWeatherInfo(newinfo);
    }

    return(
        <div style={{textAlign:"center"}}>
            <h1>Weather Application</h1>
            <SearchBox updateInfo={updateInfo}></SearchBox>
            <InfoBox info={weatherInfo}></InfoBox>
        </div>
    );
}