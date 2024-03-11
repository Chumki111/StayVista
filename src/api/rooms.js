import axiosSecure from "."
// get all rooms from database
export const getAllRooms = async() =>{
    const {data} = await axiosSecure('/rooms') ;
    return data;
}
// get single room from database
export const getRoom = async(id) =>{
    const {data} = await axiosSecure(`/room/${id}`) ;
    return data;
}

// save a room in database

export const addRoom =async(roomData)=>{
    const {data} = await axiosSecure.post(`/rooms`,roomData) ;
    return data;
}