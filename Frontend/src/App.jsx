import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './Componets/Home';
// import Home from './Components/Home';

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
