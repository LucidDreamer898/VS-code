import Navbar from "./components/navbar/Navbar";
import Calendar from "../pages/calendar/Calendar";

const App = () => {
    return (
        <>
            <div className="fixed top-0 right-0 left-0">
                <Navbar/>
            </div>
            <div className="fixed top-16 right-0 left-0 bottom-0">
                <Calendar/>
            </div>
        </>
    )
}

export default App;