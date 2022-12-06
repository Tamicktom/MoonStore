import { Link } from "react-router-dom";
import logo from "../../assets/icons/moon-bg.svg";

const Navbar = () => {
  const categories = [
    "tops",
    "womens-dresses",
    "womens-shoes",
    "womens-watches",
    "sunglasses",
    "womens-bags",
  ];

  return (
    <nav className="fixed left-1/2 transform -translate-x-1/2 max-w-7xl w-full flex justify-between bg-white rounded-full z-20 shadow-md">
      {/* logo here */}
      <Link to={`/`}>
        <div className="flex items-center gap-3 hover:bg-[#fcecf4] p-3 rounded-l-full cursor-pointer">
          <img
            src={logo}
            alt="logo"
            className="w-10 h-10 rounded-full bg-gray-200"
          />
          <div className="flex flex-col mt-[0.4rem]">
            <h1 className="text-xl font-bold leading-3">Moon</h1>
            <span className="text-xs">store</span>
          </div>
        </div>
      </Link>

      {/* categories here */}
      <ul className="flex items-center gap-3 justify-center mr-3">
        {categories.map((category) => (
          <li key={category}>
            <Link to={`/${category}`}>
              <div className="flex items-center gap-3 hover:bg-[#fcecf4] p-3 rounded-full cursor-pointer">
                <span className="text-md font-semibold">{category}</span>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
