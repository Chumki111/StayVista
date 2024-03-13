import { Outlet } from 'react-router-dom'
import Navbar from '../components/Shared/Navbar/Navbar'
import Footer from '../components/Shared/Footer/Footer'
import { useEffect, useState } from 'react';

import { ImSpinner9 } from 'react-icons/im';
const Main = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulating data fetching delay with setTimeout
    setTimeout(() => {
      setLoading(false);
    }, 4000); // Adjust the delay time as needed
  }, []);

  if (loading) {
    return <div className='flex justify-center items-center h-screen'><ImSpinner9 className='animate-spin m-auto text-5xl text-rose-600'/></div>; 
  }
  return (
    <div>
      <Navbar />
      <div className='pt-24 min-h-[calc(100vh-68px)]'>
        <Outlet />
      </div>
      <Footer />
    </div>
  )
}

export default Main
