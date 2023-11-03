"use client";

import Image from "next/image";
import NavLink from "./NavLink";

export default function Hero() {
  return (
    <section>
      <div className="custom-screen pt-10 text-gray-600">
        <div className="space-y-5 max-w-4xl mx-auto text-center">
          <h1 className="text-4xl text-gray-800 font-extrabold mx-auto sm:text-6xl">
            Welcome to Dice of Fate
          </h1>
          <p className="max-w-xl mx-auto">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic libero
            debitis rem voluptatibus excepturi facere maiores unde doloremque
            quas, aut ipsam quae exercitationem saepe eaque praesentium beatae
            harum! Debitis, sit.
          </p>
          <div className="flex items-center justify-center gap-x-3 font-medium text-sm">
            <NavLink
              href="/game"
              className="text-white bg-gray-800 hover:bg-gray-600 active:bg-gray-900 "
            >
              Enter the game
            </NavLink>
          </div>
          <div className="pt-10 flex justify-center">
            <Image
              alt="image"
              src="/gamescreen.jpeg"
              width={700}
              height={500}
              className="rounded-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
