import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav
      className="
      fixed
      top-0
      left-0
      w-full
      z-50
      backdrop-blur-xl
      bg-white/5
      border-b
      border-white/10
    "
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}

        <Link
          to="/"
          className="
          text-2xl
          font-bold
          bg-gradient-to-r
          from-cyan-400
          via-blue-500
          to-purple-500
          bg-clip-text
          text-transparent
        "
        >
          🌍 Air Advisor AI
        </Link>

        {/* Menu */}

        <div className="flex items-center gap-8">
          <Link
            to="/"
            className="
            text-gray-300
            hover:text-cyan-400
            transition
          "
          >
            Home
          </Link>

          <Link
            to="/about"
            className="
            text-gray-300
            hover:text-cyan-400
            transition
          "
          >
            About
          </Link>

          <button
            className="
            px-5
            py-2
            rounded-xl
            bg-gradient-to-r
            from-cyan-500
            to-blue-600
            text-white
            font-semibold
            hover:scale-105
            transition
          "
          >
            Explore
          </button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
