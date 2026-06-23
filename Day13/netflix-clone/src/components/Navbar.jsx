import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="flex justify-between">
      <Link to="/" className="no-underline">
        <h1 className="text-[2.5rem] text-[red] font-bold">NETFLIX</h1>
      </Link>
      <div>
        <button className="m-5 border border-[rgb(179,177,177)] bg-[rgb(30,30,30)] px-[15px] py-[5px] text-white">
          🌏︎ English
        </button>
        <Link
          to="/signin"
          className="m-5 inline-block border border-[rgb(179,177,177)] bg-[rgb(233,5,5)] px-[15px] py-[5px] text-white no-underline"
        >
          Sign In
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;

