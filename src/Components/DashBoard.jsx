import { Outlet } from "react-router-dom";
import Nav from "./Nav";
import SideBar from "./SideBar";
import { createContext, useState } from "react";
export let Context = createContext();
function DashBoard() {
  let [hamburger, setHamburger] = useState("");
  const [query, setQuery] = useState("");
  const [display, setDisplay] = useState("none");
  const [selectedIndex, setSelectedIndex] = useState(-1);
  let contextData = {
    selectedIndex:selectedIndex,
    setSelectedIndex:setSelectedIndex,
    query: query,
    display: display,
    setQuery: setQuery,
    setDisplay: setDisplay,
  };
  return (
    <>
      <Context.Provider value={contextData}>
        <header className="fixed width-100">
          <SideBar hamburger={hamburger} />
          <Nav hamburger={hamburger} setHamburger={setHamburger} />
        </header>
        <Outlet />
      </Context.Provider>
    </>
  );
}
export default DashBoard;
