import { Search } from "react-bootstrap-icons";

const Navbar = () => {
    return (
        <div className="fixed flex bg-gray-500 w-full h-20 justify-between items-center p-6">
            <div className="w-8">
                Logo
            </div>
            <div className="flex w-1/2 h-14 border-4 rounded-xl items-center pl-3 hover:bg-neutral-700 transition">
                <Search size={30}/>
                <div className="flex items-center pl-5">
                    Search
                </div>
            </div>
            <div className="w-8">
                <img src="https://clipart-library.com/images/8i6o5kG6T.png"/>
            </div>
        </div>
    )
}

export default Navbar;