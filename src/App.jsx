import Random from "./components/Random";
import Tag from "./components/Tag";


export default function App() {
  return (
    <div className="w-screen h-screen flex flex-col items-center overflow-x-hidden overflow-y-auto  background">
      <h1 className="bg-white w-11/12 text-3xl rounded-2xl mt-10 p-4 text-center font-bold">RANDOM GIFS</h1>
      <div className="w-10/12 flex flex-col gap-y-10 mt-10 items-center mb-10">
        <Random/>
        <Tag/>
      </div>
    </div>
  );
}