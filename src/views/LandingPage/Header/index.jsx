import bg_header from "../../../assets/static/bg_header.jpg";

import style from "./style.module.css";

const Header = () => {
  return (
    <div className="w-screen">
      <img src={bg_header} className={`${style.headerImage} h-[50rem] w-[100vw]`} />
    </div>
  );
};

export default Header;
