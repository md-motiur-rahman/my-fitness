import React, { useState } from "react";

export default function Exercise(props) {
  const { exercise, i } = props;
  const [setsCompleted, setSetsCompleted] = useState(0);

  function handleSetIncrement() {
    setSetsCompleted((setsCompleted + 1) % 6);
  }

  return (
    <div className="p-4 flex flex-col bg-slate-950 rounded-md sm:flex-wrap">
      <div className="flex flex-col sm:flex-row sm:items-center sm:flex-wrap gap-x-4">
        <h4 className="text-3xl hidden sm:inline sm:text-4xl md:text-5xl font-semibold text-slate-400">
          0{i + 1}
        </h4>
        <h2 className=" capitalize whitespace-nowrap truncate text-lg max-w-full sm:text-xl md:text-2xl flex-1 md:text-center">
          {exercise.name.replaceAll("_", " ")}
        </h2>
        <p className=" capitalize text-sm text-slate-400">{exercise.type}</p>
      </div>
      <div className="flex flex-col">
        <h3 className="text-slate-400 text-sm">Muscle Group</h3>
        <p className=" capitalize">{exercise.muscles.join(" & ")}</p>
      </div>
      <div className="flex flex-col gap-2 bg-slate-950 rounded p-2">
        {exercise.description.split("___").map((val) => {
          return <div className="text-sm">{val}</div>;
        })}
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-4 sm:place-items-center gap-2">
        {["reps", "rest", "tempo"].map((info) => {
          return (
            <div
              key={info}
              className="flex flex-col p-2 rounded border-[1.5px] border-solid border-slate-800 w-full"
            >
              <h3 className=" capitalize text-slate-400 text-sm">
                {info === "reps" ? `${exercise.unit}` : info}
              </h3>
              <p className=" font-medium">{exercise[info]}</p>
            </div>
          );
        })}
        <button
          onClick={handleSetIncrement}
          className="flex flex-col p-2 rounded border-[1.5px] border-solid border-blue-900 duration-200 hover:border-blue-600 w-full"
        >
          <h3 className=" capitalize text-slate-400 text-sm">Sets Completed</h3>
          <p className=" font-medium">{setsCompleted}/5</p>
        </button>
      </div>
    </div>
  );
}