import Ad from "@/components/Ad";
import React from "react";

const ads = [
  {
    title: "Google",
    link: "https://www.google.com/",
    image:
      "https://www.shakeout.org/2008/downloads/ShakeOut_BannerAds_JoinUs_160x600_v2.gif",
    description:
      "Search the world's information, including webpages, images, videos and more. Google has many special features to help you find exactly what you're looking.",
  },
  {
    title: "Amazon",
    link: "https://www.amazon.com/",
    image:
      "https://www.shakeout.org/2008/downloads/ShakeOut_BannerAds_GetReady_160x600_v8.gif",
    description:
      "Grab Exciting Offers and Discounts On an Array Of Products From Popular Brands. Read Customer Reviews & Find Best Sellers.Share the joy with epic deals.",
  },
];

const Game = () => {
  return (
    <div className="flex text-center justify-center mt-5">
      <Ad
        title={ads[0].title}
        link={ads[0].link}
        image={ads[0].image}
        description={ads[0].description}
      ></Ad>
      <div className="w-5/6" data-testid="game">
        <iframe
          className="w-full aspect-video"
          src="https://diceoffate.onrender.com"
        ></iframe>
      </div>
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
