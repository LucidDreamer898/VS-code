import Navbar from "./components/Navbar";
import Filter from "./components/Filter";
import PastProjects from "./components/PastProjects";
import { PlusSquareFill } from "react-bootstrap-icons";

const App = () => {
  return (
    <>
      <div className="fixed flex flex-col w-full h-screen bg-neutral-500 overflow-scroll">
        <Navbar/>
        <Filter/>
        <PastProjects/>
        <button className="absolute bottom-8 right-10 text-sky-500 hover:text-sky-800"><PlusSquareFill size={65}/></button>
      </div>
    </>
  )
}

export default App;