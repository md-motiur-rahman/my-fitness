import React, { useState } from "react";
import SectionWrapper from "./SectionWrapper";
import { WORKOUTS, SCHEMES } from "../utils/data";
import Button from "./Button";
import WorkOut from "./WorkOut";

function Header(props) {
  const { index, title, description } = props;
  return (
    <div className="flex flex-col gap-4">
      <div className=" flex items-center justify-center gap-2">
        <p className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold text-slate-400">
          {index}
        </p>
        <h4 className=" text-xl sm:text-2xl md:text-3xl">{title}</h4>
      </div>
      <p className=" text-sm sm:text-base mx-auto">{description}</p>
    </div>
  );
}

export default function Generator(props) {
  const {poison, setPoison, muscles, setmuscles, goal, setGoal, updateWorkout} = props
  const [showModal, setShowModal] = useState(false);

  

  function toggleModal() {
    setShowModal(!showModal);
  }

  function updatemuscless(musclesGroup) {
    if (muscles.includes(musclesGroup)) {
      setmuscles(muscles.filter((val) => val !== musclesGroup));
      return;
    }

    if (muscles.length > 2) {
      return;
    }

    if (poison !== "individual") {
      setmuscles([musclesGroup]);
      setShowModal(false);
      return;
    }

    setmuscles([...muscles, musclesGroup]);
    if (muscles.length === 2) {
      setShowModal(false);
    }
  }

  return (
    <SectionWrapper
      header={"generate your workout"}
      title={["it's", "Huge", "o'clock"]}
      id={"generate"}
    >
      <Header
        index={"01"}
        title={"Pick your poison"}
        description={"Select the workout you wish to endure"}
      />
      <div className=" grid grid-cols-2 sm:grid-cols-4 gap-4">
        {Object.keys(WORKOUTS).map((type, typeIndex) => {
          return (
            <button
              key={typeIndex}
              onClick={() => {
                setmuscles([]);
                setPoison(type);
              }}
              className={
                "border bg-slate-950 py-3 rounded-lg hover:border-blue-600" +
                (poison === type ? " border-blue-600" : " border-blue-400")
              }
            >
              <p className=" capitalize">{type.replaceAll("_", " ")}</p>
            </button>
          );
        })}
      </div>
      <Header
        index={"02"}
        title={"Lock on targets"}
        description={"Select the muscles judge for innihilation"}
      />
      <div className=" bg-slate-950  border border-solid border-blue-400 rounded-lg flex flex-col">
        <button
          className=" relative p-4 flex items-center justify-center"
          onClick={toggleModal}
        >
          <p className=" uppercase">
            {muscles.length === 0 ? "Select muscles groups" : muscles.join(", ")}
          </p>
          <i className="fa-solid fa-caret-down absolute right-3 top-1/2 -translate-y-1/2"></i>
        </button>
        {showModal && (
          <div className="flex flex-col p-3">
            {(poison === "individual"
              ? WORKOUTS[poison]
              : Object.keys(WORKOUTS[poison])
            ).map((musclesGroup, musclesGroupIndex) => {
              return (
                <button
                  key={musclesGroupIndex}
                  onClick={() => updatemuscless(musclesGroup)}
                  className={
                    "hover:text-blue-400 duration-200 " +
                    (muscles.includes(musclesGroup) ? " text-blue-400" : " ")
                  }
                >
                  <p className=" uppercase">
                    {musclesGroup.replaceAll("_", " ")}
                  </p>
                </button>
              );
            })}
          </div>
        )}
      </div>
      <Header
        index={"03"}
        title={"Become Juggernaut"}
        description={"Select your ultimate objective"}
      />
      <div className=" grid grid-cols-3  gap-4">
        {Object.keys(SCHEMES).map((scheme, schemeIndex) => {
          return (
            <button
              key={schemeIndex}
              onClick={() => {
                setGoal(scheme);
              }}
              className={
                "border bg-slate-950 py-3 rounded-lg hover:border-blue-600" +
                (goal === scheme ? " border-blue-600" : " border-blue-400")
              }
            >
              <p className=" capitalize">{scheme.replaceAll("_", " ")}</p>
            </button>
          );
        })}
      </div>
      <Button text={"Formulate"} func={updateWorkout}/>
    </SectionWrapper>
  );
}
