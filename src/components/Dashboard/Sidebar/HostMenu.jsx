import MenuItem from "./MenuItem"
import { MdAddHomeWork } from "react-icons/md";
import { MdHomeWork } from "react-icons/md";

const HostMenu = () => {
  return (
    <>
    <MenuItem
                icon={MdAddHomeWork}
                label='Add Room'
                address='add-room'
              />
              <MenuItem
                icon={MdHomeWork}
                label='My Listings'
                address='my-listings'
              />
    </>
  )
}

export default HostMenu