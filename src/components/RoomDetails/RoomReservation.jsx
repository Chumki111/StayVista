import Button from "../Button/Button"
import Calender from "./Calender"


function RoomReservation({roomData}) {
  return (
    <div className="rounded-xl border-[1px] border-neutral-200 bg-white">
      <div className="flex items-center gap-1 p-4">
  <div className="text-2xl font-semibold">$ {roomData?.price}</div>
  <div className="font-light text-neutral-600">night</div>
      </div>
      <hr />
        <div className="flex justify-center">
        <Calender/>
        </div>
        <hr />
        <div className="p-4">
          <Button label={'Reserve'}/>
        </div>
        <hr />
        <div className="p-4 flex justify-between items-center text-lg font-semibold">
          <div>Total</div>
          <div>$ {roomData?.price}</div>
        </div>
    </div>
  )
}

export default RoomReservation