import { useState } from "react";
import SearchBox from "./searchBox.jsx";
import WeatherBox from "./weatherbox.jsx";


export default function WeatherApp(){
    let [data , setData] = useState({});
    function updataData(newData){
        if(newData == undefined){
            setData({});
            return;
        }
        setData(newData);
    }

    return (
        <div>
            <SearchBox updataData = {updataData} />
            {Object.keys(data).length === 0?  null :<WeatherBox data = {data}/> }
             
        </div>
    )
}