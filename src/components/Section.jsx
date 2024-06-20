import { useState } from "react";
import SubSection from "./SubSection";

export default function Section({ section, index, updateList }) {
  const [open, setOpen] = useState(false);

  return (
    <div
      className="bg-gray-200 p-6 max-w-2xl mx-auto min-w-[300px] 
                 text-slate-800 rounded-lg shadow-lg 
                 transition hover:shadow-2xl 
                 hover:-translate-y-2 hover:scale-[101%]"
    >
      <div className="text-center mb-4">
        <h3 className="font-bold text-xl">{section.title}</h3>
      </div>
      <div className="text-center mb-4">
        <p className="font-bold text-slate-800 inline-block mr-4">
          {section.progress}%
        </p>
        <button
          onClick={() => setOpen((prev) => !prev)}
          className="bg-gray-800 text-white px-5 py-3 rounded hover:bg-gray-600 inline-block"
        >
          {open ? "Close" : "Open"}
        </button>
      </div>

      {open && (
        <div className="flex flex-col w-full my-10 gap-4">
          {section.subsections.map((sub, i) => {
            return (
              <SubSection
                key={`${index}-${i}`}
                index={i}
                sectionIndex={index}
                updateList={updateList}
                subtitle={sub.subtitle}
                completed={sub.completed}
              />
            );
          })}
        </div>
      )}
    </div>
  );
}
