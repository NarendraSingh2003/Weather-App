import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import "./searchBox.css";
import { useState } from 'react';

export default function SearchBox({updateInfo}){

    let [city,setcity]=useState("");
    let [error,seterror]=useState(false);

    const API_URL= "https://api.openweathermap.org/data/2.5/weather";
    const API_KEY= "e8e164c0bd5d48333c0a33c14a17765d";

    let getWEatherInfo= async()=>{

        try{
            let response=await fetch(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`);
        let jsonResponse=await response.json();
        console.log(jsonResponse);
        
        let result={
            city:city,
            temp: jsonResponse.main.temp,
            tempMin: jsonResponse.main.temp_min,
            tempMax: jsonResponse.main.temp_max,
            humidity: jsonResponse.main.humidity,
            feelsLike: jsonResponse.main.feelsLike,
            weather: jsonResponse.weather[0].description,
        };
        console.log(result);
        return(result);
    }
    catch(err){
        throw err;
    }
       
    }
        

    let handleChange=(event)=>{
        setcity(event.target.value);
    }

    let handleSubmit= async (event)=>{
        try{
            event.preventDefault();
        console.log(city);
        setcity("");
        let newinfo= await getWEatherInfo();
        updateInfo(newinfo);
        }
        catch(err){
            seterror(true);
        }
        
    }
    return(
        <>
        <div className='searchBox'>
            <form onSubmit={handleSubmit}>
            <TextField id="city" label="City Name" variant="outlined" required value={city} onChange={handleChange}/>
            <br /> <br />
            <Button type='submit' size="small" variant="contained">Search</Button>
            {error && <p style={{color:"red"}}>No such place exists!</p>}
            </form>
        </div>
        </>
    );
}