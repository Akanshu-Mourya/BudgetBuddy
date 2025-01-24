import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './Componets/LandingPage/Home';

const appRouter = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
]);

function App() {
  return (
    <div>
      <RouterProvider router={appRouter} />
    </div>
  );
}

export default App;
