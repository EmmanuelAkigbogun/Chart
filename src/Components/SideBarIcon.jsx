import { useContext } from "react";
import { Cont } from "../App";
import files from "../assets/files";
function SideBarIcon({state,setSate,alt,img}) {
    let handleClick = (e) => {
        setSate((state = e.target.alt));
};
    const context = useContext(Cont);
    let { toggleLight } = context;
    return (
      <>
        <section className="j-center align-center icon-40">
          <section className="j-center align-center relative icon-40">
            <img
              src={img}
              alt={alt}
              className="icon-24 pointer"
              onClick={handleClick}
              title={alt}
              width="24"
              height="24"
            />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="3"
              height="21"
              viewBox="0 0 3 21"
              fill="none"
              alt="breadcrumbIcon"
              className={`absolute ${
                state == alt ? "left-140" : "none"
              } breadcrumb`}
            >
              <path
                d="M6.53467e-06 3.02509C7.11773e-06 1.42129 1.40951 0.182713 3 0.388889V21C1.34315 21 4.88293e-07 19.6569 1.09063e-06 18L6.53467e-06 3.02509Z"
                fill={toggleLight == "light" ? "#0D062D" : "white"}
              />
            </svg>
          </section>
        </section>
      </>
    );
}
export default SideBarIcon