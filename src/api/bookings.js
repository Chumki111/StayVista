import axiosSecure from "."

// create payment Intent
export const createPaymentIntent=async(price) =>{
    const {data} = await axiosSecure.post('/create-payment-intent',price)
    return data;
}

// save booking info in db 
export const saveBookingInfo=async(paymentInfo) =>{
    const {data} = await axiosSecure.post('/bookings',paymentInfo)
    return data;
}

// update room status after room booking in db
export const updateStatus=async(id,status) =>{
    const {data} = await axiosSecure.patch(`/rooms/status/${id}`,{status})
    return data;
}
