import { useEffect } from "react";
import { useState } from "react"
import Card from "./Card";


function Rooms() {
    const [rooms,setRooms] = useState([]);
    useEffect(() =>{
      fetch('rooms.json')
      .then(res => res.json())
      .then(data => setRooms(data))
    },[])
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-8">
        {
            rooms?.map(room => <Card key={room._id} room={room}/>)
        }
    </div>
  )
}

export default Rooms