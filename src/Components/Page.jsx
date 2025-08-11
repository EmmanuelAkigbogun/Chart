import { createContext, useContext, useState } from "react";
import { Cont } from "../App";
import files from "../assets/files";
import BarChart from "./BarChart";
import CardSection from "./CardSection";
import DetailsTable from "./DetailsTable";
import TopPlatforms from "./TopPlatforms";

function Page() {
  return (
    <>
      <main className="section-padding gray-bg">
        <section className="column gap-20 gap-10-800">
          <section className="row gap-20 column-1155 gap-10-800">
            <BarChart />
            <CardSection />
          </section>
          <section className="row gap-20 column-1155 gap-10-800">
            <DetailsTable />
            <TopPlatforms />
          </section>
        </section>
      </main>
    </>
  );
}
export default Page;
