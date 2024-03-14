import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../hooks/useAuth"
import Loader from "../components/Shared/Loader";
import PropTypes from 'prop-types';

const PrivetRoute = ({children}) => {
 
    const {user,loading} = useAuth();
    const location = useLocation();
    if(loading) return <Loader/>
    if(user) return children;
  return <Navigate to='/login' state={{from:location}} replace="true"/>
}

PrivetRoute.propTypes={
  children:PropTypes.object
}
export default PrivetRoute