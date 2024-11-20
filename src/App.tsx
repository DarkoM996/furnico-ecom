import {
  createBrowserRouter,
  Route,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<h1>Something</h1>}></Route>
  )
);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
