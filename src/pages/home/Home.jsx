import React from "react";
import "./Home.css";
import SvgIcon from "../../subcomponents/svg/SvgIcon";
import Sp from "../../subcomponents/separete/Sp";
import ServiceCard from "../../subcomponents/serviceCard/ServiceCard";
import Center from "../../subcomponents/center/Center";
import InfoCard from "../../subcomponents/infocard/InfoCard";
import ImageGrid from "../../subcomponents/gallery/ImageGrid";

const Home = () => {
  // IMAGENS:
  const imageArray = [
    "/portfolio/3.png",
    "/portfolio/4.png",
    "/portfolio/5.png",
  ];

  return (
    <div className="bg-themebg text-themetext">
      <div className="banner flex justify-center items-center lg:justify-start">
        <SvgIcon
          src="/logos/logoFuse.svg"
          className="w-[70%] text-white xl:w-[37%] lg:m-auto"
        />
      </div>

      <Sp />

      <Center className="m-auto">
        <section className="flex flex-col justify-center items-center lg:grid lg:grid-cols-3 lg:gap-3 gap-y-3">
          <ServiceCard
            title="Identidade Visual"
            description="Logotipos, paletas de cores e designs únicos para fortalecer sua marca."
            duration="2"
          />
          <ServiceCard
            title="Design para Redes Sociais"
            description="Artes atrativas para Instagram, Facebook e outras plataformas."
            duration="3"
          />
          <ServiceCard
            title="Banners e Anúncios"
            description="Layouts profissionais para campanhas impactantes."
            duration="4"
          />
        </section>
      </Center>

      <Sp />

      <section>
        <InfoCard />
      </section>

      <Sp />

      <main>
        <Center className='m-auto'>
          <h2>PORTFÓLIO</h2>
          <ImageGrid images={imageArray} />
        </Center>
      </main>
    </div>
  );
};

export default Home;
