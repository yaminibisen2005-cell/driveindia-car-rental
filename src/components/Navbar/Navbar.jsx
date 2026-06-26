import { Link, NavLink } from "react-router-dom";

const navLinks = [
  { label: "Home", to: "/" },
  { label: "Cars", to: "/cars" },
  { label: "About", to: "/about" },
  { label: "Contact", to: "/contact" },
];

function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/95 backdrop-blur">
      <nav className="mx-auto flex max-w-7xl items-center justify-between gap-6 px-5 py-4 sm:px-6 lg:px-8">
        <Link to="/" className="text-xl font-black tracking-tight text-slate-950">
          DriveIndia
        </Link>

        <div className="hidden items-center gap-6 md:flex">
          {navLinks.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              className={({ isActive }) =>
                `text-sm font-semibold transition ${
                  isActive ? "text-sky-600" : "text-slate-600 hover:text-slate-950"
                }`
              }
            >
              {link.label}
            </NavLink>
          ))}
        </div>

        <div className="flex items-center gap-3">
          <Link
            to="/login"
            className="hidden rounded-lg px-4 py-2 text-sm font-bold text-slate-700 transition hover:bg-slate-100 sm:inline-flex"
          >
            Login
          </Link>
          <Link
            to="/signup"
            className="rounded-lg bg-sky-500 px-4 py-2 text-sm font-bold text-white shadow-sm shadow-sky-500/25 transition hover:bg-sky-600"
          >
            Sign up
          </Link>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
