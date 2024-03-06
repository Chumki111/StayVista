import { useParams } from "react-router-dom"
import Container from "../../components/Shared/Container"
import { useEffect, useState } from "react";
import Loader from "../../components/Shared/Loader";
import { Helmet } from "react-helmet-async";
import Header from "../../components/RoomDetails/Header";
import RoomInfo from "../../components/RoomDetails/RoomInfo";
import RoomReservation from "../../components/RoomDetails/RoomReservation";



function RoomDetails() {
  const { id } = useParams();
  const [room, setRoom] = useState({});
  const [loading, setLoading] = useState(false)
  useEffect(() => {
    setLoading(true)
    fetch("/rooms.json")
      .then((res) => res.json())
      .then((data) => {
        const singleRoom = data.find(room => room._id === id)
        setRoom(singleRoom)
        setLoading(false);
      })
  }, [id]);
  if (loading) return <Loader />
  return (
    <>
      <Container>
        <Helmet>
          <title>{room?.title}</title>
        </Helmet>
        <div className="max-w-screen-lg mx-auto">
          <div className="flex flex-col gap-6">
            {/* header */}
            <Header roomData={room}/>
            <div className="grid grid-cols-1 md:grid-cols-7 md:gap-10 mt-8">
              {/* roomInfo */}
              <RoomInfo roomData={room}/>
              <div className="md:grid-cols-3 order-first md:order-last">
                {/* RoomReservation */}
                 <RoomReservation/>
              </div>
            </div>
            
          </div>
        </div>
      </Container>
    </>
  )
}

export default RoomDetails