import { useState, useEffect } from "react";
import {
  findSectionProgress,
  findOverallProgress,
} from "../utils/calculateProgress";
import gymTrackerList from "../utils/gymTrackerList";
import Section from "./Section";

export default function GYMList() {
  const [gymList, setGymList] = useState([]);
  const [overallProgress, setOverallProgress] = useState(0);

  useEffect(() => {
    const localList = JSON.parse(localStorage.getItem("gymlist")) || [];
    setGymList(localList.length !== 0 ? localList : gymTrackerList);
  }, []);

  useEffect(() => {
    setOverallProgress(findOverallProgress(gymList));
  }, [gymList]);

  const updateList = (index, indexOfSub) => {
    const newGYMList = [...gymList];
    newGYMList[index].subsections[indexOfSub].completed =
      !newGYMList[index].subsections[indexOfSub].completed;
    newGYMList[index].progress = findSectionProgress(
      newGYMList[index].subsections
    );
    setGymList(newGYMList);
    localStorage.setItem("gymlist", JSON.stringify(newGYMList));
  };

  return (
    <div className="flex flex-col gap-10 w-[60%] mb-40 relative ml-[18rem]">
      {overallProgress === 100 && (
        <h1 className="text-center text-4xl text-white-500">
          Good job! You've completed your training for the week.
        </h1>
      )}
      <p>Progress: {overallProgress}%</p>
      <div
        className={`-mt-5 rounded sticky top-0 
							bg-gradient-to-r from-red-600 
							to-red-700 transition-all h-2 w-[${overallProgress}%]`}
      ></div>
      {gymList.map((section, index) => {
        return (
          <Section
            index={index}
            updateList={updateList}
            key={index}
            section={section}
          />
        );
      })}
    </div>
  );
}
