import React, { useState,useContext,useEffect } from "react";
import {getMonth} from "../utility/getMonth"
import Month from "../components/Month"
import CalendarHeader from "../components/CalendarHeader"
import GlobalContext from "../context/GlobalContext";

export default function Calendar(){
  const [currenMonth, setCurrentMonth] = useState(getMonth());
  const { monthIndex } = useContext(GlobalContext);
  const [events, setEvents] = useState('')
  const [nick, setName] = useState('')
	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')
  let [StartDate, setStartDate] = useState();
  let [EndDate, setEndDate] = useState();
  const [title, setTitle] = useState('')
  const [descryption, setDescryption] = useState('')

    return (
      
        <>
             <CalendarHeader/>
            <div className="h-5/6 flex flex-columns">
              <Month month={currenMonth}/>
            </div>
        </>
           )

}

