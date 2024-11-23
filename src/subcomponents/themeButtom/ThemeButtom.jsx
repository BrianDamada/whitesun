import React from "react";
import { useTheme } from "../../context/ThemeContext";
import SvgIcon from "../svg/SvgIcon";

const ThemeButtom = ({text}) => {
  const { theme, toggleTheme,  } = useTheme();

  return (
    <button onClick={toggleTheme} className="flex flex-col gap-y-3 items-center">
      <SvgIcon
        src={theme === "light" ? "/theme/sun.svg" : "/theme/moon.svg"}
        className="w-10"
      />
      {text && <p className="">{theme}</p>}
    </button>
  );
};

export default ThemeButtom;
