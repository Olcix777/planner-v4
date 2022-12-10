import React, {useEffect, useState } from "react"
import dayjs from "dayjs"

export default function Day ({day, rowIdx}) {
    function getCurrentDayClass() {
        return day.format("DD-MM-YY") === dayjs().format("DD-MM-YY") 
          ? "bg-blue-600 text-white rounded-full w-7"
          : "";
      }

      let [StartDate, setStartDate] = useState();
      let [EndDate, setEndDate] = useState();
      const [title, setTitle] = useState('')
      const [descryption, setDescryption] = useState('')
    


      useEffect(() => {
        const  fetchData = async () => {
         const res = await fetch("http://localhost:5000/userinfo", {
          method: "POST",
          crossDomain: true,
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
            "Access-Control-Allow-Origin": "*",
          },
          body: JSON.stringify({
            email: localStorage.user,
          }),
        })   
      
      
        const data = await res.json()
            if (data.status === 'ok') {
                console.log(data.data.events)
            }
            else {
            }  
      
      
      }
    fetchData()
         
    })

  
    return (
        <div className="border border-gray-200 flex flex-col">
            <header className="flex flex-col items-center">
               <p className="font-black text-2xl">{dayjs(day).format('ddd')}</p>
            
                <p className={`my-1 text-2xl text-center  ${getCurrentDayClass()}`}  >
            {dayjs(day).format('DD')}
            </p>
            </header>
            <div>
                
            </div>
        </div>
    )
}

