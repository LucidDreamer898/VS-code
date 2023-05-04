import {List} from 'react-bootstrap-icons';
import { useDispatch } from 'react-redux';
import { toggleIsOpen } from '../../../pages/calendar/components/menu/menuSlice';

const Navbar = () => {
    const dispatch = useDispatch()

    return (
        <div className='bg-NavBarColor w-full h-16 flex items-center justify-between'>
            <div className='absolute bottom-0 bg-BodyColor w-full h-0.5'/>
            <button className='absolute top-0 left-0 h-16 w-16 pl-2' onClick={() => dispatch(toggleIsOpen())}>
                <div className='flex justify-center items-center h-12 w-12 hover:bg-slate-600 rounded-2xl'>
                    <List color='grey' size={40}/>
                </div>
            </button>

            <div className='absolute top-0 right-0 h-16 w-16 pr-2 flex justify-center items-center'>
                <img src={"https://www.hartz.com/wp-content/uploads/2022/04/small-dog-owners-1.jpg"} className='h-12 rounded-full'/>
            </div>

            <div className='text-NavBarTextColor w-full flex justify-center'>Friday, April 28, 2023</div>
        </div>
    )
}

export default Navbar;