import React from "react";
import Center from "../center/Center";
import Button from "../button/Button";

const InfoCard = () => {
  return (
    <div className="w-full flex justify-center text-themetext">
      <Center className="flex flex-col lg:flex-row">
        <img
          src="/sobre/1.webp"
          alt="About Image"
          className="lg:w-[30vw] lg:h-auto object-contain"
        />
        <div className="lg:pl-7 lg:flex lg:flex-col lg:justify-between">
          <h2 className="font-bold 2xl:text-[4vw] mt-3 lg:mt-0">Sobre</h2>
          <p className="2xl:text-[1.5vw] xl:text-[1.3vw] my-3 xl:my-0">
            WhiteSun é uma empresa de Design Gráfico comprometida com qualidade
            e profissionalismo. Especializamos em artes para Instagram e
            Facebook, com conteúdo atraente e bem elaborado. Explore nosso site
            e confira nosso <a href="">portfólio</a> ou entre em contato.
          </p>
          <Button >
            <a href="https://wa.me/5514998631662" target="_blank">Contato</a>
          </Button>
        </div>
      </Center>
    </div>
  );
};

export default InfoCard;
