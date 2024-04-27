import { NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <div className="sticky top-0 bg-neutral-100 text-center text-neutral-600 dark:bg-neutral-600 dark:text-neutral-200 lg:text-left z-20 rounded-lg drop-shadow-2xl">
      <nav className="flex justify-between items-center mb-6">
        <NavLink to="/">
          <h1 className="mb-3  text-xl font-extrabold leading-none tracking-tight md:text-5xl lg:text-6xl p-5">
            Surgeon Preferences
          </h1>
        </NavLink>
        <div className="p-5">
          <NavLink
            className="m-5 bg-blue-900 text-neutral inline-flex items-center justify-center whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-slate-100 h-9 hover:text-slate-600 rounded-md p-1  md:text-md"
            to="/"
          >
            Home
          </NavLink>
          <NavLink
            className=" bg-blue-900 text-neutral inline-flex items-center justify-center whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-slate-100 h-9 hover:text-slate-600 rounded-md p-1  md:text-md"
            to="/create"
          >
            Add New
          </NavLink>
        </div>
      </nav>
    </div>
  );
}
