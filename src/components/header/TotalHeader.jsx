// components/header/TotalHeader.jsx

import React, { useState } from "react";
import Header from "./Header";
import Navbar from "./Navbar";
useState;

const TotalHeader = ({ headerLinks }) => {
  const [navbarVisible, setNavbarVisible] = useState(false);

  function handleClick() {
    setNavbarVisible(!navbarVisible);
  }

  return (
    <header className="fixed z-40">
      <div className="absolute">
        <Navbar
          headerLinks={headerLinks}
          navbarVisible={navbarVisible}
          handleClick={handleClick}
        />
      </div>
      <div className="">
      <div
          className={`w-[100vw] h-[100vh] bg-black absolute top-0 right-0 z-10 
            ${navbarVisible ? "opacity-80 pointer-events-auto" : "opacity-0 pointer-events-none"}
            transition-opacity duration-300`}

            onClick={handleClick}
        ></div>
        <Header headerLinks={headerLinks} handleClick={handleClick} />
      </div>
    </header>
  );
};

export default TotalHeader;
