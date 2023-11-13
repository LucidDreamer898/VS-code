import Navbar from "./components/Navbar";
import HomePage from "./pages/home/HomePage";

export default function App(){
  return(
    <div className="flex flex-col w-full">
      <Navbar/>
      <div className="fixed top-20 left-0 bottom-0 right-0">
        <HomePage/>
      </div>
    </div>
  )
}