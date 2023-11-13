import HomePage from "./pages/home/HomePage";
import { Route, Routes } from "react-router-dom";
import NewSubjectCreator from "./pages/home/components/NewSubjectCreator";

export default function App() {
    return(
        <Routes>
            <Route path="/home" element={<HomePage/>}/>
            <Route path="/new-subject-creator" element={<NewSubjectCreator/>}/>
        </Routes>
    )
}