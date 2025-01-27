import { createBrowserRouter } from 'react-router-dom';
import Home from './Components/LandingPage/Home';
import { RouterProvider } from 'react-router';
import Features from './Components/LandingPage/Features';
import Login from './Components/Auth/Login';
import SignUp from './Components/Auth/SignUp';

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