import React from "react";
import "./Home.css";
import SvgIcon from "../../subcomponents/svg/SvgIcon";
import ServiceCard from "../../subcomponents/serviceCard/ServiceCard";
import Sp from "../../subcomponents/separete/Sp";
Sp
ServiceCard;

const Home = () => {

  const cardItems = [
    {title: 'Identidade Visual', description: 'Logotipos, paletas de cores e designs únicos para fortalecer sua marca.' },
    {title: 'Design para Redes Sociais', description: 'Artes atrativas para Instagram, Facebook e outras plataformas.' },
    {title: 'Banners e Anúncios', description: 'Layouts profissionais para campanhas impactantes.' },
  ]




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
        <ServiceCard cardItems={cardItems} />
      </div>

      <Sp />


    </div>
  );
};

export default Home;
