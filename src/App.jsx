import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import DashBoard from "./Components/DashBoard";
import Main from "./Components/Main";
import "./index.css";
import Chart from "./Components/Chart";
function App() {
  let router = createBrowserRouter(
    createRoutesFromElements(
      <Route>
          <Route element={<Chart />} path="chart"></Route>
          <Route element={<DashBoard />} path="">
            <Route element={<Main />} path=""></Route>
          </Route>
      </Route>
    )
  );

  return <RouterProvider router={router} />;
}

export default App;
