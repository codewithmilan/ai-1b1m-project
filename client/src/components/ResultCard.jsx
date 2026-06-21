function ResultCard({ result }) {
  return (
    <div className="result-card">
      <h2>Analysis Result</h2>

      <h3>Category: {result.category}</h3>

      <h3>Risk Level: {result.risk}</h3>

      <h4>Recommendations</h4>

      <ul>
        {airData && (
          <div className="result-card">
            <h2>City : {city}</h2>

            <h3>AQI Level :{airData.list[0].main.aqi}</h3>

            <h3>Category :{aqiMap[airData.list[0].main.aqi]}</h3>
          </div>
        )}
      </ul>
    </div>
  );
}

export default ResultCard;
