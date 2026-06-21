import axios from "axios";

export const getAQIData = async (city) => {

  const API_KEY =
    process.env.OPENWEATHER_API_KEY;

  const geoUrl =
    `http://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=1&appid=${API_KEY}`;

  const geoResponse =
    await axios.get(geoUrl);

  const lat =
    geoResponse.data[0].lat;

  const lon =
    geoResponse.data[0].lon;

  const airUrl =
    `http://api.openweathermap.org/data/2.5/air_pollution?lat=${lat}&lon=${lon}&appid=${API_KEY}`;

  const airResponse =
    await axios.get(airUrl);

  return airResponse.data;
};