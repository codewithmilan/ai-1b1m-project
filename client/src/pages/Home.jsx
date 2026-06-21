import CitySearch from "../components/CitySearch";

function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-blue-950 to-slate-950 flex items-center justify-center p-6 relative overflow-hidden">
      {/* Background Decorative Blurs */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-20 w-72 h-72 bg-cyan-500/20 blur-3xl rounded-full"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-purple-500/20 blur-3xl rounded-full"></div>
      </div>

      <div className="relative z-10 w-full max-w-6xl">
        {/* Header Section */}
        <div className="text-center mt-20">
          <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent select-none">
            🌍 AI Air Quality Advisor
          </h1>
          <p className="text-yellow-300 mt-4 text-lg font-medium tracking-wide">
            SDG 11 - Sustainable Cities & Communities
          </p>
        </div>

        {/* Search Component */}
        <CitySearch />

        {/* Features Grid */}
        <div className="grid md:grid-cols-3 gap-6 mt-12">
          {/* Card 1 */}
          <div className="bg-white/10 backdrop-blur-lg p-6 rounded-3xl border border-white/10 hover:border-cyan-500/30 transition-all duration-300">
            <h3 className="text-cyan-400 text-xl font-bold flex items-center gap-2">
              🌍 Live AQI Monitoring
            </h3>
            <p className="text-gray-300 mt-3 text-sm leading-relaxed">
              Real-time pollution monitoring using OpenWeather API.
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-white/10 backdrop-blur-lg p-6 rounded-3xl border border-white/10 hover:border-purple-500/30 transition-all duration-300">
            <h3 className="text-purple-400 text-xl font-bold flex items-center gap-2">
              🤖 AI Recommendations
            </h3>
            <p className="text-gray-300 mt-3 text-sm leading-relaxed">
              Personalized health and sustainability advice using Gemini AI.
            </p>
          </div>

          {/* Card 3 */}
          <div className="bg-white/10 backdrop-blur-lg p-6 rounded-3xl border border-white/10 hover:border-green-500/30 transition-all duration-300">
            <h3 className="text-green-400 text-xl font-bold flex items-center gap-2">
              🎯 SDG Impact
            </h3>
            <p className="text-gray-300 mt-3 text-sm leading-relaxed">
              Supports Sustainable Cities and Communities (SDG 11).
            </p>
          </div>
        </div>

        {/* Project Impact Section */}
        <div className="mt-16 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white">
            Project Impact
          </h2>
          <p className="text-gray-400 mt-4 max-w-3xl mx-auto text-base md:text-lg leading-relaxed">
            This solution helps citizens understand air quality, reduce
            pollution exposure, promote sustainable practices, and contribute
            towards healthier cities.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Home;
