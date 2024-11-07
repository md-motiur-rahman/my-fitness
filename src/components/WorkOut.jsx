import React from "react";
import SectionWrapper from "./SectionWrapper";
import Exercise from "./Exercise";

export default function WorkOut({ workout }) {
  return (
    <SectionWrapper
      id={"workout"}
      header={"Welcome to"}
      title={["The", "DANGER", "zone"]}
    >
      <div className="flex flex-col gap-4">
        {workout.map((exercise, i) => {
          return <Exercise exercise={exercise} key={i} i={i} />;
        })}
      </div>
    </SectionWrapper>
  );
}
