import { createBrowserRouter } from 'react-router-dom';
import Home from './Components/LandingPage/Home';
import { RouterProvider } from 'react-router';
import Login from './Components/Auth/Login';
import SignUp from './Components/auth/SignUp.jsx';
import Sidebar from './Components/Shared/SideBar';
import DeshBord from './Components/Dashboard/DeshBord';
import { ThemeProvider } from './Components/DarkLiteMood/ThemeProvider';
import AddIncome from './Components/Dashboard/AddIncome';
// import Google from './Components/Auth/google.jsx';
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
  {
    path: '/dashboard',
    element: <DeshBord />
  },
  {
    path: '/dashboard/income',
    element: <AddIncome/>
  }
]);

function App() {
  return (
    <main>
    <ThemeProvider>
      <RouterProvider router={appRouter} />
      </ThemeProvider>
    </main>
  );
}

export default App;
