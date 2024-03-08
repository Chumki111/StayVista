import { useState } from "react"
import Button from "../Button/Button"
import Calender from "./Calender"
import { formatDistance, parseISO } from "date-fns";


function RoomReservation({roomData}) {
  const [value, setValue] = useState({
    startDate: new Date(roomData?.from),
    endDate: new Date(roomData?.to),
    key: 'selection',
  })
  // console.log(value);
   //   Total days * price
   const totalDays = parseInt(
    formatDistance(new Date(roomData?.to), new Date(roomData?.from)).split(' ')[0]
  )
  // Total Price Calculation
  const totalPrice = totalDays * roomData?.price
  

  return (
    <div className="rounded-xl border-[1px] border-neutral-200 bg-white">
      <div className="flex items-center gap-1 p-4">
  <div className="text-2xl font-semibold">$ {roomData?.price}</div>
  <div className="font-light text-neutral-600">night</div>
      </div>
      <hr />
        <div className="flex justify-center">
        <Calender value={value}/>
        </div>
        <hr />
        <div className="p-4">
          <Button label={'Reserve'}/>
        </div>
        <hr />
        <div className="p-4 flex justify-between items-center text-lg font-semibold">
          <div>Total</div>
          <div>$ {totalPrice}</div>
        </div>
    </div>
  )
}

export default RoomReservation