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
            An RPG experience in the palm of your hand. Enter a unique
            adventure, explore the world and its consequences, and gain the
            favor or the hate of the inhabitants of this far realm. Dice Of Fate
            aims to create an engaging story with multiple results in a visual
            novel experience and dice experience to the decision, making every
            important encounter an event that can fail.
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
              alt="game screen shot"
              src="/gamescreen.png"
              width={1137}
              height={641}
              className="rounded-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
