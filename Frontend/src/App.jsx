import { createBrowserRouter } from 'react-router-dom';
import Home from './Components/LandingPage/Home';
import { RouterProvider } from 'react-router';
import Features from './Components/LandingPage/Features';
import Login from './Components/Auth/Login';
import SignUp from './Components/auth/SignUp.jsx';
import Dashboard from './Components/Dashboard/Dashboard';
// import Google from './Components/Auth/google.jsx';
const appRouter = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  // {
  //   path: '/google',
  //   element: <Google />
  // },
  {
    path: '/login',
    element: <Login />
  }, {
    path: '/register',
    element: <SignUp />
  },
  {
    path: '/dashboard',
    element: <Dashboard />
  }
]);

function App() {
  return (
    <div>
      <RouterProvider router={appRouter} />
    </div>
  );
}

export default App;