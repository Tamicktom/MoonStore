import bg_header from "../../../assets/static/bg_header.jpg";

import style from "./style.module.css";

const Header = () => {
  return (
    <div className="absolute z-[-1] w-full">
      <img src={bg_header} className={`${style.headerImage} h-[50rem] w-full`} />
    </div>
  );
};

export default Header;