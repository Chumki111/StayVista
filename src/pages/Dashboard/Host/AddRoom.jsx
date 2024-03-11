import { Helmet } from "react-helmet-async"
import AddRoomForm from "../../../components/Form/AddRoomForm"
import { useState } from "react"
import useAuth from "../../../hooks/useAuth"
import { imageUpload } from "../../../api/utils"
import { addRoom } from "../../../api/rooms"
import toast from "react-hot-toast"
import { useNavigate } from "react-router-dom"


const AddRoom = () => {
  const { user } = useAuth();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [uploadImageText, setUploadImageText] = useState('Upload Image')
  const [dates, setDates] = useState({
    startDate: new Date(),
    endDate: new Date(),
    key: 'selection'
  })
  const handleSubmit = async (e) => {
    setLoading(true);
    e.preventDefault();
    const form = e.target;
    const location = form.location.value;
    const category = form.category.value;
    const title = form.title.value;
    const to = dates.endDate;
    const from = dates.startDate;
    const price = form.price.value;
    const guests = form.total_guest.value;
    const bathrooms = form.bathrooms.value;
    const description = form.description.value;
    const bedrooms = form.bedrooms.value;
    const image = form.image.files[0];
    const image_url = await imageUpload(image);

    const host = {
      name: user?.displayName,
      image: user?.photoURL,
      email: user?.email
    }
    const roomData = {
      location,
      category,
      title,
      to,
      from,
      price,
      guests,
      bathrooms,
      bedrooms,
      host,
      description,
      image: image_url?.data?.display_url
    }
    try {
      setLoading(true);
      await addRoom(roomData);
      setUploadImageText('Uploaded!');
      toast.success('Your Room Added Successfully');
      navigate('/dashboard/my-listings')

    } catch (err) {
      console.log(err);
      toast.error(err.message);
    } finally {
      setLoading(false);
    }

  }
  // handle dates change from react-dates-ranges
  const handleDates = (ranges) => {
    setDates(ranges.selection)
  }
  // image button text change 
  const handleImageChange = (image) => {
    setUploadImageText(image?.name)

  }
  return (
    <>
      <Helmet>
        <title>Add Room || Dashboard</title>
      </Helmet>
      {/* form */}
      <AddRoomForm
        handleSubmit={handleSubmit}
        handleDates={handleDates}
        dates={dates}
        handleImageChange={handleImageChange}
        uploadButtonText={uploadImageText}
        loading={loading}
      />
    </>
  )
}

export default AddRoom