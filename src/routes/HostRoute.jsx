import { Navigate} from "react-router-dom";
import Loader from "../components/Shared/Loader";
import useRole from "../hooks/useRole";
import PropTypes from 'prop-types';

const HostRoute = ({children}) => {

const [role,isLoading] = useRole();
console.log(role);
   if(isLoading) return <Loader/>
    if(role === 'host') return children;
  return <Navigate to='/dashboard'/>
}
HostRoute.propTypes={
  children:PropTypes.object
}
export default HostRoute;