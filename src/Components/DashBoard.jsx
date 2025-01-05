import { Outlet } from "react-router-dom";
import Nav from "./Nav";
import SideBar from "./SideBar";
import { useContext, useState } from "react";
import { Cont } from "../App";
function DashBoard() {
  let [hamburger, setHamburger] = useState("");
    const context = useContext(Cont);
    let { toggleLight, setToggleLight } = context;
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
