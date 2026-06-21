import { generateAdvice } from "../services/aiService.js";
import { getAQIData } from "../services/weatherService.js";

export const getCityAQI = async (req, res) => {
  try {
    const { city } = req.body;

    const data = await getAQIData(city);

    const aqi = data.list[0].main.aqi;

    const aqiMap = {
      1: "Good",
      2: "Fair",
      3: "Moderate",
      4: "Poor",
      5: "Very Poor",
    };

    const category = aqiMap[aqi];

    const aiAdvice = await generateAdvice(category, city);

    res.status(200).json({
      city,
      aqi,
      category,
      aiAdvice,
      pollutants: data.list[0].components,
    });
  } catch (error) {
    console.error(error);

    res.status(500).json({
      message: error.message,
    });
  }
};
