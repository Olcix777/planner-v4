import React, {useContext} from "react"
import GlobalContext from "../context/GlobalContext"
import dayjs from "dayjs";
import { Link } from "react-router-dom"
export default function  CalendarHeader({nick}) {

    const {monthIndex, setMonthIndex}  = useContext(GlobalContext)
    function handlePrevMonth() {
        setMonthIndex(monthIndex - 1);
        console.log(monthIndex)
      }
      function handleNextMonth() {
        setMonthIndex(monthIndex + 1)
        console.log(monthIndex)
      }

return(
        <header className="px-4 py-2 flex items-center  justify-between relative">
                <h1 className="text-4xl mr-20 text-xl text-purple-900 font-bold ">Planer</h1>

            <button className="border-2 border rounded py-2 px-6 hover:bg-sky-700 border-purple-900">Today</button>
            <button onClick={handlePrevMonth}><span className="material-symbols-outlined ml-10 text-2xl cursor-pointer">arrow_back_ios</span>
            </button>
            
            
            <button onClick={handleNextMonth} >
            <span className="material-symbols-outlined mr-auto text-2xl cursor-pointer "  >arrow_forward_ios</span>
            </button>
              <h2 className="text-teal-100 ml-4 text-xl w-90">{dayjs(new Date(dayjs().year(), monthIndex)).format("MMMM-YYYY")}</h2>

            <Link to={'/event'}>
            <button className="border-2 border rounded py-2 px-4 hover:bg-sky-700 border-purple-900">Event</button>
            </Link>
            <button className="border-2 border rounded py-2 px-4 hover:bg-sky-700 border-purple-900">Month</button>
            <button className="border-2 border rounded py-2 px-4 hover:bg-sky-700 border-purple-900">Day</button>
           
            <button className="border-2 border rounded py-2 px-4 hover:bg-sky-700 border-purple-900">Week</button>
            <button className="border-2 border rounded py-2 px-4 border-dashed text-blue-50 font-normal hover:font-bold bg-purple-900">Logout</button>

        </header>
    )
} 
