import { Outlet } from "react-router-dom";
import Nav from "./Nav";
import SideBar from "./SideBar";
function DashBoard() {
  return (
    <>
      <header className="fixed width-100">
        <SideBar />
        <Nav />
      </header>
      <Outlet />
    </>
  );
}
export default DashBoard;
