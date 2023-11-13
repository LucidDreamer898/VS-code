import { HouseFill, Search } from "react-bootstrap-icons";

export default function NavBar() {
    return(
            <div className="absolute z-50 flex justify-between w-full h-20 bg-secondary items-center">
                <button className="pl-8 text-primary text-5xl hover:text-accent"> <HouseFill/> </button>

                <div className="flex items-center p-4 h-14 w-2/5 bg-gradient-to-r from-primary/40 to-accent/40 border-2 rounded-full">
                    <Search className="text-2xl text-accent"/>
                    <input className="flex outline-none items-center p-4 h-16 w-full bg-inherit text-text-dark placeholder:text-text text-xl" type="text" placeholder="Search"/>
                </div>

                <div className="flex items-center pr-4 w-16 h-16"><img className="rounded-full bg-primary/80" src="https://lh3.googleusercontent.com/a/AAcHTteMQphg8QBsoE79he6EyGLdJWBL6amXKwHevntLsIQJ3w=s576-c-no"></img></div>
            </div>
    )
}