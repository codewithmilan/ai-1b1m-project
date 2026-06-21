import { useState } from "react";
import API from "../services/api";

function CitySearch() {
  const [city, setCity] = useState("");
  const [airData, setAirData] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleSearch = async (e) => {
    // Prevent page reload if triggered by form submit
    if (e) e.preventDefault();
    if (!city.trim()) return alert("Please enter a city name");

    try {
      setLoading(true);
      const response = await API.post("/city-aqi", { city: city.trim() });
      setAirData(response.data);
    } catch (error) {
      console.error("AQI Fetch Error:", error);
      alert("Unable to fetch AQI Data. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const getAQIColor = (category) => {
    switch (category?.toLowerCase()) {
      case "good": return "text-green-400";
      case "fair": return "text-yellow-400";
      case "moderate": return "text-orange-400";
      case "poor": return "text-red-400";
      case "very poor": return "text-red-600";
      default: return "text-white";
    }
  };

  return (
    <div className="w-full max-w-4xl mx-auto">
      {/* Search Input Box */}
      <form 
        onSubmit={handleSearch} 
        className="backdrop-blur-xl bg-white/10 border border-white/20 rounded-3xl p-6 shadow-2xl"
      >
        <div className="flex flex-col sm:flex-row gap-4">
          <input
            type="text"
            placeholder="Enter City Name..."
            value={city}
            onChange={(e) => setCity(e.target.value)}
            disabled={loading}
            className="flex-1 bg-white/5 border border-white/10 rounded-2xl p-4 text-white placeholder:text-gray-400 outline-none focus:border-cyan-500/50 transition disabled:opacity-50"
          />

          <button
            type="submit"
            disabled={loading || !city.trim()}
            className="px-8 py-4 sm:py-0 rounded-2xl font-semibold text-white bg-gradient-to-r from-cyan-500 to-blue-600 hover:scale-[1.02] active:scale-95 transition-all duration-200 disabled:opacity-50 disabled:pointer-events-none"
          >
            {loading ? "Searching..." : "Search"}
          </button>
        </div>
      </form>

      {/* Loading Spinner State */}
      {loading && (
        <div className="flex justify-center items-center mt-12 gap-3">
          <div className="w-6 h-6 border-4 border-cyan-400 border-t-transparent rounded-full animate-spin"></div>
          <p className="text-white text-lg font-medium">Fetching live data...</p>
        </div>
      )}

      {/* AQI Dashboard Data Display */}
      {airData && !loading && (
        <div className="mt-8 space-y-6 animate-fade-in">
          {/* Main City Card */}
          <div className="backdrop-blur-xl bg-white/10 border border-white/20 rounded-3xl p-8 shadow-xl">
            <h2 className="text-3xl text-white font-bold tracking-wide">📍 {airData.city}</h2>
            
            <p className="text-gray-300 mt-4 text-xl">
              AQI Level: <span className="font-bold text-white ml-2 text-2xl">{airData.aqi}</span>
            </p>

            <p className={`text-2xl font-extrabold mt-2 tracking-wide ${getAQIColor(airData.category)}`}>
              {airData.category}
            </p>
          </div>

          {/* Pollutants Grid Breakdown */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            <div className="backdrop-blur-xl bg-white/10 border border-white/20 rounded-3xl p-6 text-center hover:bg-white/15 transition-all duration-300">
              <h3 className="text-gray-400 font-medium uppercase tracking-wider text-sm">PM2.5</h3>
              <p className="text-4xl text-white font-bold mt-2">
                {airData.pollutants?.pm2_5 ?? "N/A"}
              </p>
            </div>

            <div className="backdrop-blur-xl bg-white/10 border border-white/20 rounded-3xl p-6 text-center hover:bg-white/15 transition-all duration-300">
              <h3 className="text-gray-400 font-medium uppercase tracking-wider text-sm">PM10</h3>
              <p className="text-4xl text-white font-bold mt-2">
                {airData.pollutants?.pm10 ?? "N/A"}
              </p>
            </div>

            <div className="backdrop-blur-xl bg-white/10 border border-white/20 rounded-3xl p-6 text-center hover:bg-white/15 transition-all duration-300">
              <h3 className="text-gray-400 font-medium uppercase tracking-wider text-sm">CO (Carbon Monoxide)</h3>
              <p className="text-4xl text-white font-bold mt-2">
                {airData.pollutants?.co ?? "N/A"}
              </p>
            </div>
          </div>

          {/* Gemini AI Advice Container */}
          <div className="bg-gradient-to-r from-purple-500/10 via-indigo-500/5 to-cyan-500/10 border border-cyan-500/20 rounded-3xl p-8 shadow-inner relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-purple-500/10 blur-2xl rounded-full pointer-events-none"></div>
            <h3 className="text-2xl font-bold bg-gradient-to-r from-cyan-300 to-purple-400 bg-clip-text text-transparent mb-4 flex items-center gap-2">
              🤖 AI Sustainability Advisor
            </h3>
            <div className="whitespace-pre-wrap text-gray-200 leading-8 text-base tracking-wide">
              {airData.aiAdvice}
            </div>
          </div>

          {/* SDG & Feature Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            <div className="bg-green-500/10 border border-green-500/20 rounded-3xl p-6 hover:border-green-500/30 transition">
              <h3 className="text-green-300 font-bold text-lg flex items-center gap-2">🌱 Sustainability</h3>
              <p className="text-gray-300 mt-2 text-sm leading-relaxed">
                Promote clean transportation and greener cities.
              </p>
            </div>

            <div className="bg-blue-500/10 border border-blue-500/20 rounded-3xl p-6 hover:border-blue-500/30 transition">
              <h3 className="text-blue-300 font-bold text-lg flex items-center gap-2">📊 Live Updates</h3>
              <p className="text-gray-300 mt-2 text-sm leading-relaxed">
                Track live air quality and pollution levels dynamically.
              </p>
            </div>

            <div className="bg-purple-500/10 border border-purple-500/20 rounded-3xl p-6 hover:border-purple-500/30 transition">
              <h3 className="text-purple-300 font-bold text-lg flex items-center gap-2">🎯 SDG 11 Impact</h3>
              <p className="text-gray-300 mt-2 text-sm leading-relaxed">
                Support healthier and sustainable urban communities.
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default CitySearch;