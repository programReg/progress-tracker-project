import GYMList from "./components/GYMList";

export default function App() {
  return (
    <>
      <div className="flex flex-col justify-center items-center mt-4">
        <h1 className="text-emerald-500 font-bold text-3xl ml-[20rem]">
          Progess Tracker
        </h1>
        <h3
          className="bg-clip-text text-transparent bg-gradient-to-r 
							from-red-400 to-red-900 font-bold text-xl mb-4 ml-[20rem]"
        >
          Gym Schedule
        </h3>
        <GYMList />
      </div>
    </>
  );
}
