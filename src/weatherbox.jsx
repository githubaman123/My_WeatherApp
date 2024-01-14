import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import WbSunnyOutlinedIcon from '@mui/icons-material/WbSunnyOutlined';
import ThunderstormRoundedIcon from '@mui/icons-material/ThunderstormRounded';


export default function WeatherBox({data}){
    let hotImg = "https://images.pexels.com/photos/953241/pexels-photo-953241.jpeg";
    let coldImg = "https://images.pexels.com/photos/1076885/pexels-photo-1076885.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1";
    let rainyImg = "https://images.pexels.com/photos/459451/pexels-photo-459451.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1";
    let img;
    if(data.humidity>80){
        img = rainyImg;
    }
    else{
        if(data.tem>15){
            img = hotImg;
        }
        else{
            img = coldImg;
        }
    }
    return (
        <div>
            <h2>Weather info</h2>
            <Card sx={{ maxWidth: 345 }}>
                <CardMedia
                    component="img"
                    alt="green iguana"
                    height="140"
                    image={img}
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                    {data.city} {data.humidity>80 && <ThunderstormRoundedIcon/>}
                    {(data.tem>15 && data.humidity<=80) && <WbSunnyOutlinedIcon/>}
                    {(data.tem<15 && data.humidity<=80) && <AcUnitIcon/>}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        Temprature : {data.tem} <br />
                        Humidity : {data.humidity} <br />
                        Max. Tem : {data.temp_max} <br />
                        Min. Temprature : {data.temp_min} <br /> <br />
                        {/* <hr /> */}
                        The weather can be described as {data.description} and feels like {data.feels_like}&deg;C
                    </Typography>
                </CardContent>
            </Card>
        </div>
    )
}