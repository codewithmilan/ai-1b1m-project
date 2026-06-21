function Footer() {
  return (
    <footer
      className="
      mt-20
      backdrop-blur-xl
      bg-white/5
      border-t
      border-white/10
      py-8
      text-center
      text-gray-400
      "
    >
      <h3 className="text-white text-xl font-semibold">
        AI Air Quality Advisor
      </h3>

      <p className="mt-2">
        Built using React, Node.js, OpenWeather API & Gemini AI
      </p>

      <p className="mt-2">SDG 11 • Sustainable Cities & Communities</p>

      <p className="mt-4 text-sm">© 2026 Milan Kumar Verma</p>
    </footer>
  );
}

export default Footer;
