import { useEffect } from "react";
import { useState } from "react";
import Card from "./Card";
import Container from "../Shared/Container";
import { useSearchParams } from "react-router-dom";
import Headings from "../Shared/Headings";
import Loader from "../Shared/Loader";

function Rooms() {
  const [rooms, setRooms] = useState([]);
  const [params, setParams] = useSearchParams();
  const category = params.get("category");
  const [loading,setLoading] = useState(false)
  useEffect(() => {
    setLoading(true)
    fetch("rooms.json")
      .then((res) => res.json())
      .then((data) => {
        if (category) {
          const filtered = data.filter(room => room.category === category)
          setRooms(filtered)
        }
        else {
          setRooms(data)
        }
        setLoading(false)
      }

      );
  }, [category]);
  if(loading) return <Loader/>
  return (
    <Container>
      {
        rooms && rooms.length > 0 ? <div className="pt-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-8">
          {rooms?.map((room) => (
            <Card key={room._id} room={room} />
          ))}
        </div> : <div className="flex justify-center items-center min-h-[calc(100vh-300px)]">
        <Headings
          center={true}
          title="No Rooms Available In This Category"
          subtitle="Please Select Other Category"
        />
        </div>
      }
    </Container>
  );
}

export default Rooms;
