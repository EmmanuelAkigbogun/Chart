import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import DashBoard from "./Components/DashBoard";
import "./index.css";
import Chart from "./Components/Chart";
import ChartA from "./Components/ChartA";
import Page from "./Components/Page";
function App() {
  let router = createBrowserRouter(
    createRoutesFromElements(
      <Route>
        <Route element={<ChartA />} path="chartx"></Route>
        <Route element={<Chart />} path="chart"></Route>
        <Route element={<DashBoard />} path="">
          <Route element={<Page />} path=""></Route>
        </Route>
      </Route>
    )
  );

  return <RouterProvider router={router} />;
}

export default App;
