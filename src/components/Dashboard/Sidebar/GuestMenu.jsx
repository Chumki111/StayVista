import MenuItem from "./MenuItem"
import { FaFingerprint } from "react-icons/fa";

const GuestMenu = () => {
  return (
    <>
<MenuItem
                icon={FaFingerprint}
                label='My Bookings'
                address='my-bookings'
              />
    </>
  )
}

export default GuestMenu