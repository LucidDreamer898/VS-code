import DayView from "./components/dayView/DayView";
import Menu from "./components/menu/Menu";
import { PlusCircle, PlusCircleFill } from "react-bootstrap-icons";

const Calendar = () => {
    return (
        <div className= " flex bg-BodyColor w-full h-full">
            <div className="">
                <Menu/>
            </div>
            <div className="relative w-full overflow-scroll">
                <DayView/>
            </div>
            <div className="absolute bottom-7 right-9 hover:bg-white rounded-full transition-all duration-150">
                <PlusCircleFill size={50} color="gray"/>
            </div>
        </div>
    )
}

export default Calendar;