import TextField from '@mui/material/TextField';
import { useState } from 'react';
import Button from '@mui/material/Button';
import "./searchBox.css";
import ErrorSharpIcon from '@mui/icons-material/ErrorSharp';
import Alert from '@mui/material/Alert';
import Fab from '@mui/material/Fab';
import NavigationIcon from '@mui/icons-material/Navigation';


export default function SearchBox( {updataData}){
    let [city , setCity] = useState("");
    let [err , setErr] = useState(false);
    let API_URL = "https://api.openweathermap.org/data/2.5/weather"
    let API_KEY = "642c25f349d25be6000715461d3f1546";

    let getWeatherInfo = async ()=>{
        try{
            let response = await fetch(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`);
            response = await response.json();
            let data = {
                city : city,
                tem : response.main.temp,
                humidity : response.main.humidity,
                pressure : response.main.pressure,
                temp_max : response.main.temp_max,
                temp_min : response.main.temp_min,
                feels_like : response.main.feels_like,
                description : response.weather[0].description,
            }
            return data;
        }catch (err){
            setErr(true);
            return;
        }
    }

    let handleSubmit = ( async (event)=>{
        event.preventDefault();
        try{
            let data = await getWeatherInfo();
            updataData(data);
        }
        catch(err){
        }
    })
    let handleChange = ((event)=>{
        setCity(event.target.value);
    })
    return (
        <div className='Searchbox'>
            <h3>Search for the weather</h3>
            <form action="" onSubmit={handleSubmit}>
                <TextField id="outlined-basic" name={city} onChange={handleChange}  label="City" variant="outlined" required />
                <br /><br />
                <Button  type='submit'><Fab variant="extended"><NavigationIcon sx={{ mr: 1 }} />Navigate</Fab></Button>
                <br></br><br></br>
                {err && <Alert severity="error">No Place found</Alert>}
            </form>
        </div>
    )
}