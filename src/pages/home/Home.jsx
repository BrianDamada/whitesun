import React from "react";
import "./Home.css";
import SvgIcon from "../../subcomponents/svg/SvgIcon";
import Sp from "../../subcomponents/separete/Sp";
Sp

const Home = () => {




  return (
    <div className="bg-themebg">
      <div className="banner flex justify-center items-center lg:justify-start">
        <SvgIcon
          src="/logos/logoFuse.svg"
          className="w-[70%] text-themetext xl:w-[37%] lg:ml-80"
        />
      </div>

      <Sp />

      <div className="flex">
      </div>

      <Sp />


    </div>
  );
};

export default Home;
