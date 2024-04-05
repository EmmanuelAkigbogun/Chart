import { useState } from "react";
import files from "../assets/files";
import ChartBoard from "./ChartBoard";
function BarChart() {
  let [state, setState] = useState("weekly");
  return (
    <>
      <section className="width-100 border-rad-14 white-bg padding-16-20 column gap-16 bar gray-border">
        <section className="row space-between gap-10 wrap-400">
          <h3 className="heading-3">Last Orders</h3>
          <section className="row gap-10 space-between-400 wrap-400">
            <h4 className="heading-4 bold flex align-center">Sort by :</h4>
            <select
              onChange={(e) => {
                setState((state = e.target.value));
              }}
              value={state}
              className="padding-6-12 border-rad-20 gray-border white-bg"
            >
              <option value="weekly">weekly</option>
              <option value="monthly">monthly</option>
              <option value="yearly">yearly</option>
            </select>
          </section>
        </section>
        <section className="width-100 height-100 row">
          {1 == 2 && (
            <img
              src={files.bar}
              alt="bar chat"
              title="bar chart"
              className="width-100"
            />
          )}
          <ChartBoard state={state} />
        </section>
      </section>
    </>
  );
}
export default BarChart;
