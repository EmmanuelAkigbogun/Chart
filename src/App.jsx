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
import { createContext, useState } from "react";
import BarCharts from "./Components/BarCharts";
export let Cont = createContext();
function App() {
  let [toggleLight, setToggleLight] = useState("light");
  let Obj = {
    toggleLight: toggleLight,
    setToggleLight: setToggleLight,
  };
  let router = createBrowserRouter(
    createRoutesFromElements(
      <Route>
        <Route element={<ChartA />} path="chartx"></Route>
        <Route element={<BarCharts />} path="bar"></Route>
        <Route element={<Chart />} path="chart"></Route>
        <Route element={<DashBoard />} path="">
          <Route element={<Page />} path=""></Route>
        </Route>
      </Route>
    )
  );

  return (
    <Cont.Provider value={Obj}>
      <RouterProvider router={router} />
    </Cont.Provider>
  );
}

export default App;
