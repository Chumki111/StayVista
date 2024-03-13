import { createBrowserRouter } from 'react-router-dom'
import Main from '../layouts/Main'
import Home from '../pages/Home/Home'
import ErrorPage from '../pages/ErrorPage'
import Login from '../pages/Login/Login'
import SignUp from '../pages/SignUp/SignUp'
import RoomDetails from '../pages/RoomDetails/RoomDetails'
import PrivetRoute from './PrivetRoute'
import { getRoom } from '../api/rooms'
import DashboardLayout from '../layouts/DashboardLayout'
import AddRoom from '../pages/Dashboard/Host/AddRoom'
import MyListings from '../pages/Dashboard/Host/MyListings'
import HostRoute from './HostRoute'
import AdminRoute from './AdminRoute'
import ManageUser from '../pages/Dashboard/Admin/ManageUser'
import Profile from '../pages/Dashboard/Common/Profile'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Main />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/room/:id',
        element: <PrivetRoute>
          <RoomDetails />
        </PrivetRoute>,
        loader: ({ params }) => getRoom(params.id)
      }
    ],
  },
  { path: '/login', element: <Login /> },
  { path: '/signup', element: <SignUp /> },
  {
    path: '/dashboard',
    element:
      <PrivetRoute>
        <DashboardLayout />
      </PrivetRoute>,
    children: [
      // guest route
      // {
      //   path:'my-bookings',
      //   element:
      // },
      // host route
      {
        path: 'add-room',
        element: <PrivetRoute>
          <HostRoute>
            <AddRoom />
          </HostRoute>
        </PrivetRoute>
      },
      {
        path: 'my-listings',
        element:
          <PrivetRoute>
            <HostRoute>
              <MyListings />
            </HostRoute>
          </PrivetRoute>
      },
      // admin route
      {
        path:'manage-users',
        element:
        <PrivetRoute>
          <AdminRoute>
            <ManageUser/>
          </AdminRoute>
        </PrivetRoute>
      },
      {
        path:'profile',
        element:<Profile/>
      }
    ]
  }
])
