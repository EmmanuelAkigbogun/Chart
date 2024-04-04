import files from "../assets/files";
function SideBarIcon({state,setSate,alt,img}) {
    let handleClick = (e) => {
        setSate((state = e.target.alt));
};
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
            <img
              src={files.breadcrumbIcon}
              alt="breadcrumbIcon"
              className={`absolute ${state == alt ? "left-140" : "none"} breadcrumb`}
            />
          </section>
        </section>
      </>
    );
}
export default SideBarIcon