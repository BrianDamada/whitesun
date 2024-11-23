import React, { useEffect, useRef, useState } from "react";
import Center from "../center/Center";

const ServiceCard = ({ cardItems }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [duration, setDuration] = useState(1);
  const cardRef = useRef(null);

  useEffect(() => {
    // Ajustando o valor aleatório com limite de casas decimais
    const randomDuration = parseFloat(
      (Math.random() * (3 - 0.5) + 0.5).toFixed(3)
    );

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            setIsVisible(true);
          }, 100);
        }
      },
      { threshold: 0.2 }
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => {
      if (cardRef.current) {
        observer.unobserve(cardRef.current);
      }
    };
  }, []);

  return (
    <div
      ref={cardRef}
      style={{
        transitionDuration: `${duration}s`,
      }}
      className={` ${isVisible ? "opacity-100 translate-x-0" : "translate-x-10 opacity-0"} w-[100vw] flex justify-center transition-all ease-in-out`}
    >
      <Center className="grid grid-cols-1 gap-5 xl:grid-cols-3 xl:gap-7">
        {cardItems.map((i) => (
          <div className="w-full bg-themecolor2 text-themetext px-7 py-5 rounded-xl">
            <h1 className="text-themetext text-2xl mb-3">{i.title}</h1>
            <p>{i.description}</p>
          </div>
        ))}
      </Center>
    </div>
  );
};

export default ServiceCard;
