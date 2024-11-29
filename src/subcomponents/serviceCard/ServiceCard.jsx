import React, { useEffect, useRef, useState } from "react";

const ServiceCard = ({duration = '3', title = 'Default', description = `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusamus
        voluptas sapiente neque ex magni voluptate consequatur quisquam nihil
        enim repellendus nam exercitationem praesentium pariatur, aperiam sed
        ratione possimus tenetur mollitia.`}) => {
  const cardRef = useRef(null)
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setVisible(entry.isIntersecting)
      },
      {threshold: 0.1 }
    );

    if (cardRef.current){
      observer.observe(cardRef.current)
    }

    return () => {
      if(cardRef.current){
        observer.unobserve(cardRef.current);
      }
    };
  }, [])

  return (
    <div
    ref={cardRef}
    style={{ transitionDuration: `${duration}s` }}
      className={`z-0 text-themetext bg-themecolor2 p-5 transition-all w-full h-36 flex flex-col justify-center lg:h-full
        ${visible ? "translate-x-0 opacity-100" : "translate-x-36 opacity-0"}
    `}
    >
      <h1 className="text-2xl mb-2">{title}</h1>
      <p className="text-sm">
        {description}
      </p>
    </div>
  );
};

export default ServiceCard;
