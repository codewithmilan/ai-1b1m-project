import { useState } from "react";
import ResultCard from "./ResultCard";
import API from "../services/api";
function AQIForm() {
  const [aqi, setAqi] = useState("");
  const [result, setResult] = useState(null);

  const handleSubmit = async (e) => {
  e.preventDefault();

  try {

    const response = await API.post(
      "/analyze",
      {
        aqi: Number(aqi)
      }
    );

    setResult(response.data);

  } catch (error) {
    console.log(error);
  }
};

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          type="number"
          placeholder="Enter AQI"
          value={aqi}
          onChange={(e) => setAqi(e.target.value)}
        />

        <button type="submit">
          Analyze
        </button>
      </form>

      {result && <ResultCard result={result} />}
    </>
  );
}

export default AQIForm;