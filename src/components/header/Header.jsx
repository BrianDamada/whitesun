import React, { useEffect, useState } from "react";
import Center from "../../subcomponents/center/Center";
import HeaderLinks from "./atoms/HeaderLinks";
import SvgIcon from "../../subcomponents/svg/SvgIcon";
import ThemeButtom from "../../subcomponents/themeButtom/themeButtom";
import HeaderBars from "./atoms/HeaderBars";

const Header = ({ headerLinks, handleClick }) => {
  const [isScrolled, setIsScrolled] = useState(false); // Corrigido o nome para setIsScrolled

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    // Adiciona o listener de scroll
    window.addEventListener('scroll', handleScroll);

    // Limpeza do listener quando o componente for desmontado
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []); // O array vazio garante que o efeito seja executado apenas uma vez


  return (
    <header className={`z-40 w-[100vw] text-themetext flex bg-themebg py-7 transition-all ease-in-out duration-300
      ${
        isScrolled ? 'translate-y-0' : '-translate-y-full'
      }
    `} 
    >
      <Center className="flex justify-between m-auto items-center">
        <SvgIcon src="/logos/logoFuse.svg" className="w-32" />
        <div className="hidden sm:flex">
          <HeaderLinks headerLinks={headerLinks} />
        </div>
        <div className="hidden sm:flex">
          <ThemeButtom text={false} />
        </div>
        <div className="flex sm:hidden">
          <HeaderBars handleClick={handleClick} />
        </div>
      </Center>
    </header>
  );
};

export default Header;
