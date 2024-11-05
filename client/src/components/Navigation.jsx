import {Link, NavLink} from "react-router-dom"

const Navigation = () => {
  return (
    
        <header className="bg-white">
  <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
    <div className="flex h-16 items-center justify-between">
      <div className="md:flex md:items-center md:gap-12">
        <Link to="/" className="flex items-center justify-center">
          <img src="/svgs/hanger.svg" alt="Ooja logo" width={75} />
          <span className="font-iceberg font-extrabold text-red-900 text-2xl">Ooja</span>
        </Link>
      </div>

      <div className="hidden md:block">
        <nav aria-label="Global">
          <ul className="flex items-center gap-6 text-sm">
            <li>
              <NavLink className="text-gray-500 transition hover:text-gray-500/75" to="#"> About </NavLink>
            </li>

            <li>
              <NavLink className="text-gray-500 transition hover:text-gray-500/75" to="#"> Careers </NavLink>
            </li>

            <li>
              <NavLink className="text-gray-500 transition hover:text-gray-500/75" to="#"> History </NavLink>
            </li>

            <li>
              <NavLink className="text-gray-500 transition hover:text-gray-500/75" to="#"> Services </NavLink>
            </li>

            <li>
              <NavLink className="text-gray-500 transition hover:text-gray-500/75" to="#"> Projects </NavLink>
            </li>

            <li>
              <NavLink className="text-gray-500 transition hover:text-gray-500/75" to="#"> Blog </NavLink>
            </li>
          </ul>
        </nav>
      </div>

      <div className="flex items-center gap-4">
        <div className="sm:flex sm:gap-4">
          <NavLink
            className="rounded-md bg-teal-600 px-5 py-2.5 text-sm font-medium text-white shadow"
            to="#"
          >
            Login
          </NavLink>

          <div className="hidden sm:flex">
            <NavLink
              className="rounded-md bg-gray-100 px-5 py-2.5 text-sm font-medium text-teal-600"
              to="#"
            >
              Register
            </NavLink>
          </div>
        </div>

        <div className="block md:hidden">
          <button className="rounded bg-gray-100 p-2 text-gray-600 transition hover:text-gray-600/75">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="size-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  </div>
</header>

  )
}

export default Navigation