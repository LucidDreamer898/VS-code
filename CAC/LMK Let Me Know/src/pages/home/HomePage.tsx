import { Navbar } from "react-bootstrap";
import Filter from "./Filter";
import PastProjects from "./PastProjects";
import { PlusSquareFill } from "react-bootstrap-icons";

const HomePage = () => {
  return (
    <>
      <div className="flex w-full h-full bg-neutral-500 overflow-scroll p-6 ">
        <Filter/>
        <PastProjects/>
        <button className="absolute bottom-8 right-10 text-sky-500 hover:text-sky-800"><PlusSquareFill size={65}/></button>
      </div>
    </>
  )
}

export default HomePage;