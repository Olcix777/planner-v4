import React from "react"
import Day from "./Day"

export default function Month({month}) {
return(
    <div className="flex-1 grid grid-cols-7 grid-rows-5 w-full max-w-lg p-8 mx-auto text-fuchsia-900 bg-white rounded-2xl shadow-xl flex flex-col">
       {month.map((row, i) => (
            <React.Fragment key={i}>
                {row.map((day,idx) => (
                    <Day day={day} key={idx} rowIdx={i}/>
                ))}
            </React.Fragment>
       ))}
    </div>
    )
} 

