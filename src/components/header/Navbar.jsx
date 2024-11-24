import React, { useState } from "react";
import HeaderLinks from "./atoms/HeaderLinks";
import ThemeButtom from "../../subcomponents/themeButtom/themeButtom";
import SvgIcon from "../../subcomponents/svg/SvgIcon";

const Navbar = ({ headerLinks, navbarVisible, handleClick }) => {

  return (
    <header className={`z-50 bg-themebg fixed top-0 right-0 w-[40%] h-[100vh] text-themetext transition-all	ease-in-out duration-500
        ${navbarVisible ? 'translate-x-0' : 'translate-x-full'}
    `}
    >
      <div className="flex flex-col justify-between w-full h-full px-7 py-14 items-center">
        <button className="w-[20%]" onClick={handleClick}>
            <SvgIcon src="/close.svg" className="text-themeclose" />
        </button>

        <div>
          <HeaderLinks headerLinks={headerLinks} />
        </div>

        <ThemeButtom text={true} />
      </div>
    </header>
  );
};

export default Navbar;
