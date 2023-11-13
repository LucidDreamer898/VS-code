import NavBar from "../components/NavBar"
import SubjectCards from "./components/SubjectCards"

export default function Home(){
    return(
        <div className="flex h-screen w-full bg-background">
            <NavBar/>
            <SubjectCards/>
        </div>
    )
}