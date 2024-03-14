import { Navigate} from "react-router-dom";
import Loader from "../components/Shared/Loader";
import useRole from "../hooks/useRole";
import PropTypes from 'prop-types';

const AdminRoute = ({children}) => {

const [role,isLoading] = useRole();
console.log(role);
   if(isLoading) return <Loader/>
    if(role === 'admin') return children;
  return <Navigate to='/dashboard'/>
}
AdminRoute.propTypes={
  children:PropTypes.object
}
export default AdminRoute;