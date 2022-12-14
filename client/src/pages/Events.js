import React, { useState } from "react";



const Events = () => {
    let [StartDate, setStartDate] = useState();
    let [EndDate, setEndDate] = useState();
    const [title, setTitle] = useState('')
    const [descryption, setDescryption] = useState('')

  
    async function addEvent(event) {
      event.preventDefault()
      StartDate = StartDate.replace('T', ' ')
      EndDate = EndDate.replace('T', ' ')
      const response = await fetch('http://localhost:5000/event', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: localStorage.user,
          title,
            descryption,
            StartDate,
            EndDate,
        }),
       
      
      })
      StartDate.replace('T', ' ')
     
      console.log("działa")

      
      const data = await response.json()
  
      if (data.status === 'ok') {
              alert("działa")
      }
          else {
              alert("User with that email exists")
          }

  
    }
 

    return (
      <div className="flex justify-center items-center h-screen">
     <form onSubmit={addEvent}>
     <input className="block appearance-none w-full text-fuchsia-900 bg-white border border-gray-400 hover:border-fuchsia-900 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline" type="text" placeholder="NAZWA WYDARZENIA" onChange={(e) => setTitle(e.target.value)}/>
     <input type="datetime-local"  onChange={(e) => setStartDate(e.target.value)}/>
     <input type="datetime-local" onChange={(e) => setEndDate(e.target.value)}/>
    

      <input type="text" placeholder="OPIS" onChange={(e) => setDescryption(e.target.value)}/>
      <input className="mb-2 inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out" type="submit"/>
      </form>
      </div>
    );
      }

  export default Events
