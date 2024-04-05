import { useState } from "react";
import files from "../assets/files";
import Dates from "./Dates";
function Nav({hamburger,setHamburger}) {
  let handleClick = () => {
    setHamburger((hamburger = "open"));
  };
  let handleClose = () => {
      setHamburger((hamburger = ""));
  };
  return (
    <>
      <nav
        className={`${
          hamburger == "open" && "nav-mobile"
        } nav gap-20 gray-border align-center`}
        id="nava"
      >
        <section
          className={`j-center align-center gray-bg fixed padding-top-20 padding-bottom-20 logo bordertrans ${
            hamburger == "open" ? "none" : ""
          }`}
        >
          <img src={files.logo} alt="logo" className="icon-40 icon-40to24" />
        </section>
        <section
          className={`${
            hamburger == "open" && "flex-1155 pointer"
          } align-center none close`}
          onClick={handleClose}
        >
          <img src={files.close} alt="close" className="icon-40" />
        </section>
        <section
          className={` ${
            hamburger == "open" && "j-start"
          } width-100 space-between align-center`}
        >
          <h2 className="heading-2">Dashboard</h2>
          <section
            className={`${
              hamburger == "open" && "width-100-1155 flex-1155"
            } border-rad-24 gray-border row gap-8 padding-left-16 search none-1155`}
          >
            <img src={files.search} alt="search-icon" />
            <input
              type="search"
              className={`${
                hamburger == "open" && "input-search"
              } no-border border-rad-24 height-48`}
              placeholder="Search..."
            />
          </section>
        </section>
        <section
          className={`${
            hamburger == "open" &&
            "spacegap-10-1155 flex-1155 width-100-1155 flex-550 width-100-550"
          } row align-center gap-20 none-550`}
        >
          <Dates />
          <section className="icon-40 border-rad-50 gray-border j-center align-center">
            <img src={files.bell} alt="notification-icon" className="icon-20" />
          </section>
        </section>
        <section
          className={`${
            hamburger == "open" && "flex-800"
          } border-rad-24 gray-border row gap-12 padding-8 none-800`}
        >
          <section className="row gap-8 pointer">
            <img src={files.profile} alt="profile-icon" />
            <section className="column gap-4">
              <p className="paragraph-1">Justin Bergson</p>
              <p className="paragraph-2">Justin@gmail.com</p>
            </section>
          </section>
          <section className="row align-center">
            <img
              src={files.arrowDown}
              alt="arrow-down-icon"
              className="icon-20"
            />
          </section>
        </section>
        <section
          className={`${
            hamburger == "open" ? "none-1155" : "flex-1155"
          } align-center none pointer`}
          onClick={handleClick}
        >
          <img src={files.hamburger} alt="hamburger" className="icon-24" />
        </section>
      </nav>
    </>
  );
}
export default Nav;
