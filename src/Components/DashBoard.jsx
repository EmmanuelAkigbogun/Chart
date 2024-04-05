import { Outlet } from "react-router-dom";
import Nav from "./Nav";
import SideBar from "./SideBar";
import { useState } from "react";
function DashBoard() {
  let [hamburger, setHamburger] = useState("");
  return (
    <>
      <header className="fixed width-100">
        <SideBar hamburger={hamburger} />
        <Nav hamburger={hamburger} setHamburger={setHamburger} />
      </header>
      <Outlet />
    </>
  );
}
export default DashBoard;
