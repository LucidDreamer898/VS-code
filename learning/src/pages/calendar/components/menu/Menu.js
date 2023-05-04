import { useSelector } from "react-redux";
import MonthView from "../monthView/MonthView";

const Menu = () => {

    const isOpen = useSelector((state) => state.menu.isOpen)

    return (
        <div className={`h-full bg-NavBarColor transition-all ${isOpen? 'w-80' : 'w-0'} overflow-hidden duration-500`}>
            <div className="w-80">
                <div className="flex justify-center text-NavBarTextColor overflow-hidden pt-3 ease-in-out">
                    Menu
                </div>
                <dive className="flex justify-center pt-3">
                    <MonthView/>
                </dive>
            </div>
        </div>
    )
}

export default Menu;