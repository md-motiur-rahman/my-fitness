import React from "react";
import Button from "./Button";

export default function Hero() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center gap-10 text-center max-w-[900px] w-full mx-auto p-4">
      <div className="flex flex-col gap-4 ">
        <p>IT'S TIME TO GET</p>
        <h1 className="uppercase font-semibold text-4xl sm:text-5xl md:text-6xl lg:text-7xl">
          My <span className="text-blue-400">Fitness</span>
        </h1>
      </div>

      <p className="text-sm md:text-base font-light">
        Lorem ipsum dolor sit amet consectetur{" "}
        <span className="text-blue-400 font-medium">adipisicing elit</span>.
        Excepturi quisquam aliquid enim, maiores, dolore aut aspernatur ratione
        tenetur rerum laborum hic ipsum nulla quis.{" "}
        <span className="text-blue-400 font-medium">Saepe ducimus</span>
        odio minima incidunt esse?
      </p>
      <Button
        func={() => {
          window.location.href = "#generate";
        }}
        text={"Accept & Begin"}
      />
    </div>
  );
}
