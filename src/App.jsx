import { useState } from "react";
import Generator from "./components/Generator";
import Hero from "./components/Hero";
import WorkOut from "./components/WorkOut";
import { generateWorkout} from "./utils/functions";

function App() {
  const [workOut, setWorkOut] = useState(null);
  const [poison, setPoison] = useState("individual");
  const [muscles, setmuscles] = useState([]);
  const [goal, setGoal] = useState("strength_power");

  function updateWorkout() {
    if (muscles.length < 1) {
      return;
    }
    let newWorkOut = generateWorkout({poison, muscles, goal});
    // console.log(newWorkOut)
    setWorkOut(newWorkOut);

    window.location.href = "#workout";
  }

  return (
    <main className="flex flex-col min-h-screen bg-gradient-to-l from-slate-800 to-slate-950 text-white text-sm min:text-base">
      <Hero />
      <Generator
        poison={poison}
        setPoison={setPoison}
        muscles={muscles}
        setmuscles={setmuscles}
        goal={goal}
        setGoal={setGoal}
        updateWorkout={updateWorkout}
      />
      {workOut && <WorkOut workout={workOut} />}
    </main>
  );
}

export default App;
