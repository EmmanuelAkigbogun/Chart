import { useState } from "react";
import files from "../assets/files";
import SideBarIcon from "./SideBarIcon";
function SideBar() {
  let [state, setSate] = useState("category");
  let [toggle,setToggle]=useState("light")
  let handleClick=(e)=>{
    setToggle((toggle = e.target.alt.split(" ")[0]));
    console.log(e.target.alt.split(" ")[0]);
  }
  return (
    <>
      <section className="side-bar fixed">
        <section className="side-bar-child space-between gap-154 column scroll-height">
          <section className="j-center align-center gray-bg fixed padding-top-20 padding-bottom-20 logo">
            <img src={files.logo} alt="logo" className="icon-40" />
          </section>
          <section className="align-center j-center column width-100  mid-side-bar">
            <section className="column gap-16 align-center padding-bottom-20">
              <SideBarIcon
                state={state}
                setSate={setSate}
                alt="category"
                img={files.category}
              />
              <SideBarIcon
                state={state}
                setSate={setSate}
                alt="trend up icon"
                img={files.trendUp}
              />
              <SideBarIcon
                state={state}
                setSate={setSate}
                alt="user icon"
                img={files.user}
              />
              <SideBarIcon
                state={state}
                setSate={setSate}
                alt="box icon"
                img={files.box}
              />
              <SideBarIcon
                state={state}
                setSate={setSate}
                alt="dicount icon"
                img={files.discount}
              />
              <SideBarIcon
                state={state}
                setSate={setSate}
                alt="info icon"
                img={files.info}
              />
              <section className="column padding-8 dark-light gap-16">
                <img
                  src={toggle == "light" ? files.light : files.lightOff}
                  alt="light icon"
                  className="icon-24"
                  onClick={handleClick}
                  title="light"
                />
                <img
                  src={toggle == "light" ? files.darkOff : files.dark}
                  alt="dark icon"
                  className="icon-24"
                  onClick={handleClick}
                  title="dark"
                />
              </section>
            </section>
          </section>
          <section className="column gap-16 align-center fixed-bottom gray-bg padding-20-0">
            <section className="j-center">
              <img
                src={files.arrowRight}
                alt="arrow right icon"
                className="icon-24"
              />
            </section>
            <section className="j-center">
              <img src={files.setting} alt="setting icon" className="icon-24" />
            </section>
            <section className="j-center">
              <img src={files.logOut} alt="logout icon" className="icon-24" />
            </section>
          </section>
        </section>
      </section>
    </>
  );
}
export default SideBar;
