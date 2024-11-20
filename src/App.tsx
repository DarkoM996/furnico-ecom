import {
  createBrowserRouter,
  Route,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";
import HomePage from "./pages/HomePage";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" index element={<HomePage />}></Route>
  )
);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
