import axiosSecure from "."


export const saveUser = async user =>{
    const currentUser ={
        email:user?.email,
        role:'guest',
        status:'Verified'
    }
    const {data} = await axiosSecure.put(`/users/${user?.email}`,currentUser);
    return data;
}