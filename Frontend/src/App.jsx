import { createBrowserRouter } from 'react-router-dom';
import Home from './Components/LandingPage/Home';
import { RouterProvider } from 'react-router';
import Login from './Components/Auth/Login';
import SignUp from './Components/auth/SignUp.jsx';
import DeshBord from './Components/Dashboard/DeshBord';
import { ThemeProvider } from './Components/DarkLiteMood/ThemeProvider';
import { AddIncome } from './Components/Dashboard/AddIncome';
import { AddExpance } from './Components/Dashboard/AddExpance';
import AddBorrow from './Components/Dashboard/AddBorrow';
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
    path: '/dashboard/income/create',
    element: <AddIncome />
  },
  {
    path: '/dashboard/expense/create',
    element: <AddExpance />
  },
  {
    path:'dashboard/Liabilities/create',
    element:<AddBorrow/>
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
