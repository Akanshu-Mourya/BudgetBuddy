import { createBrowserRouter } from 'react-router-dom';
import Home from './Components/LandingPage/Home';
import { RouterProvider } from 'react-router';
import Login from './Components/Auth/Login';
import SignUp from './Components/auth/SignUp.jsx';
import Sidebar from './Components/Dashboard/Sidebar.jsx';
const appRouter = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
 
  {
    path: '/login',
    element: <Login />
  }, {
    path: '/register',
    element: <SignUp />
  },
  // {
  //   path: '/dashboard',
  //   element: (
  //     <div>
  //       <Sidebar />
  //     </div>
  //   ),
  // }

]);

function App() {
  return (
    <div>
      <RouterProvider router={appRouter} />
    </div>
  );
}

export default App;
