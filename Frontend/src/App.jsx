import { createBrowserRouter } from 'react-router-dom';
import Home from './Components/LandingPage/Home';
import { RouterProvider } from 'react-router';
import Features from './Components/LandingPage/Features';

const appRouter = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/features',
    element: <Features />
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