import React from "react";
import { useLocation } from "react-router-dom";
useLocation

const HeaderLinks = ({ headerLinks }) => {
  const location = useLocation();

  
  return (
    <nav >
      <ul className="flex flex-col sm:flex-row gap-3 gap-y-5">
        {headerLinks.map((item) => (
          <li key={item.index}>
            <a href={item.l} className={
              item.l === location.pathname ? 'text-themedestaque font-black' : ''
            } >{item.t}
            <div className={
              `
              transition-transform ease-in-out duration-300
              ${item.l === location.pathname ? 'bg-themedestaque w-full h-1 scale-full' : 'scale-0'}
              `
            } ></div>
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default HeaderLinks;
