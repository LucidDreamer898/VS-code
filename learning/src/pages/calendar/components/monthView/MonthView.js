import { Line } from "react-bootstrap-icons";

const MonthView = () => {
    const days = [];

    for (let i = 1; i <=31; i++) {
        days[i] = i;
    }

    return (
        <div className="flex items-center bg-gray w-72 h-96 rounded-2xl border-4 flex-col">
            <div className="text-white pt-3">
                April
            </div>
            <div className="grid grid-cols-7 gap-4 w-56 h-72 mr-2 ml-2">
                {days.map(days => (
                    <div className="flex justify-center items-center text h-8 w-8 border-LinesColor border-2 rounded-md text-NavBarTextColor">{days}</div>
                ))}
            </div>
        </div>
    )
}

export default MonthView;