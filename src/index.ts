import express from 'express';
import * as dotenv from 'dotenv';
import {mapApiResponse} from "./weather.mapper";
dotenv.config();

console.log(process.env.PORT)
const app = express();

app.get('/weather', async (req,res ) => {
    const fetchResponse = await fetch(`http://dataservice.accuweather.com/forecasts/v1/daily/1day/9?apikey=${process.env.WEATHER_API_KEY}&details=true`, {})
    const apiResponse = await fetchResponse.json();
    res.send(mapApiResponse(apiResponse));
});

app.listen(process.env.PORT, () => {
    console.log('Server is running');
})