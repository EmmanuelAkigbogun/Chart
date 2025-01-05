import { useContext, useState } from "react";
import files from "../assets/files";
import Dates from "./Dates";
import { Cont } from "../App";
function Nav({hamburger,setHamburger}) {
  let handleClick = () => {
    setHamburger((hamburger = "open"));
  };
  let handleClose = () => {
      setHamburger((hamburger = ""));
  };
    const context = useContext(Cont);
    let {toggleLight}=context
    
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
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="34"
            height="34"
            viewBox="0 0 34 34"
            fill="none"
            alt="close"
            className="icon-40"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M9.92893 24.0711C13.8342 27.9764 20.1658 27.9764 24.0711 24.0711C27.9763 20.1659 27.9763 13.8342 24.0711 9.92898C20.1658 6.02373 13.8342 6.02373 9.92893 9.92898C6.02369 13.8342 6.02369 20.1659 9.92893 24.0711Z"
              stroke={toggleLight == "light" ? "#1D1E1E" : "white"}
              strokeWidth="1.5"
            />
            <path
              d="M20.5355 20.5355L13.4645 13.4644"
              stroke={toggleLight == "light" ? "#1D1E1E" : "white"}
              strokeWidth="1.5"
              strokeLinecap="round"
            />
            <path
              d="M13.4645 20.5355L20.5355 13.4644"
              stroke={toggleLight == "light" ? "#1D1E1E" : "white"}
              strokeWidth="1.5"
              strokeLinecap="round"
            />
          </svg>
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
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              className="icon-20"
              alt="notification-icon"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M10.0001 1.04163C8.2872 1.04163 6.64449 1.72206 5.43332 2.93323C4.22215 4.1444 3.54172 5.7871 3.54172 7.49996V8.08663C3.54167 8.66737 3.36973 9.23511 3.04755 9.71829L2.09172 11.1541C0.980053 12.8208 1.82839 15.0858 3.76089 15.6125C4.39005 15.7841 5.02505 15.9291 5.66422 16.0483L5.66589 16.0525C6.30589 17.7625 8.01839 18.9583 10.0001 18.9583C11.9817 18.9583 13.6942 17.7625 14.3351 16.0525L14.3367 16.0483C14.9769 15.9292 15.6119 15.7838 16.2401 15.6125C18.1726 15.0858 19.0209 12.8208 17.9092 11.1541L16.9526 9.71829C16.6304 9.23511 16.4584 8.66737 16.4584 8.08663V7.49996C16.4584 5.7871 15.778 4.1444 14.5668 2.93323C13.3556 1.72206 11.7129 1.04163 10.0001 1.04163ZM12.8134 16.2808C10.9442 16.5041 9.05507 16.5041 7.18589 16.2808C7.77839 17.1316 8.80922 17.7083 10.0001 17.7083C11.1909 17.7083 12.2209 17.1316 12.8134 16.2808ZM4.79172 7.49996C4.79172 6.11862 5.34045 4.79386 6.31721 3.81711C7.29396 2.84036 8.61872 2.29163 10.0001 2.29163C11.3814 2.29163 12.7062 2.84036 13.6829 3.81711C14.6597 4.79386 15.2084 6.11862 15.2084 7.49996V8.08663C15.2084 8.91412 15.4534 9.72329 15.9126 10.4116L16.8692 11.8475C17.0175 12.0695 17.1108 12.3235 17.1415 12.5887C17.1722 12.8539 17.1393 13.1226 17.0457 13.3726C16.9521 13.6226 16.8004 13.8467 16.6031 14.0265C16.4057 14.2063 16.1685 14.3366 15.9109 14.4066C12.0407 15.4621 7.95855 15.4621 4.08839 14.4066C3.83103 14.3364 3.59403 14.206 3.39692 14.0263C3.19981 13.8465 3.04822 13.6225 2.95464 13.3727C2.86106 13.1228 2.82816 12.8544 2.85866 12.5893C2.88915 12.3243 2.98217 12.0703 3.13005 11.8483L4.08839 10.4116C4.54717 9.72303 4.79189 8.91406 4.79172 8.08663V7.49996Z"
                fill={toggleLight == "light" ? "#0D062D" : "white"}
              />
            </svg>
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
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              alt="arrow-down-icon"
              className="icon-20"
            >
              <path
                d="M3.19841 6.20675C3.43891 5.95614 3.81525 5.93336 4.08045 6.1384L4.15643 6.20675L10 12.2955L15.8436 6.20675C16.0841 5.95614 16.4604 5.93336 16.7256 6.1384L16.8016 6.20675C17.0421 6.45735 17.064 6.84951 16.8672 7.12585L16.8016 7.20502L10.479 13.7933C10.2385 14.0439 9.86217 14.0666 9.59697 13.8616L9.52099 13.7933L3.19841 7.20502C2.93386 6.92935 2.93386 6.48241 3.19841 6.20675Z"
                fill={toggleLight == "light" ? "#0D062D" : "white"}
              />
            </svg>
          </section>
        </section>
        <section
          className={`${
            hamburger == "open" ? "none-1155" : "flex-1155"
          } align-center none pointer`}
          onClick={handleClick}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="36"
            height="24"
            viewBox="0 0 36 24"
            fill="none"
            alt="hamburger"
            className="icon-24"
          >
            <path
              d="M0 24H36V20H0V24ZM0 14H36V10H0V14ZM0 0V4H36V0H0Z"
              fill={toggleLight == "light" ? "#0D062D" : "white"}
            />
          </svg>
        </section>
      </nav>
    </>
  );
}
export default Nav;
