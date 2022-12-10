
import React, {useEffect, useState } from "react"
import dayjs from "dayjs"






export default function ShowE(){




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

  let x = 0
  const data = await res.json()
      if (data.status === 'ok') {
          data.data.events.forEach(()=> {
            
     
          });
      }
      else {
      }







}
fetchData()

 
})




return (
    <>

    </>
)








}