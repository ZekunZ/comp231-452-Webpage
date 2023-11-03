import Ad from "@/components/Ad";
import React from "react";

const ads = [
  {
    title: "Google",
    link: "https://www.google.com/",
    image:
      "https://www.shakeout.org/2008/downloads/ShakeOut_BannerAds_JoinUs_160x600_v2.gif",
    description:
      " Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic libero debitis rem voluptatibus excepturi facere maiores unde doloremque quas.",
  },
  {
    title: "Amazon",
    link: "https://www.amazon.com/",
    image:
      "https://www.shakeout.org/2008/downloads/ShakeOut_BannerAds_JoinUs_160x600_v2.gif",
    description:
      " Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic libero debitis rem voluptatibus excepturi facere maiores unde doloremque quas.",
  },
];

const Game = () => {
  return (
    <div className="flex text-center mt-5">
      <Ad
        title={ads[0].title}
        link={ads[0].link}
        image={ads[0].image}
        description={ads[0].description}
      ></Ad>
      <div className="w-5/6">Game</div>
      <Ad
        title={ads[1].title}
        link={ads[1].link}
        image={ads[1].image}
        description={ads[1].description}
      ></Ad>
    </div>
  );
};

export default Game;
