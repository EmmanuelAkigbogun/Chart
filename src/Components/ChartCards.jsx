import files from "../assets/files";
function ChartCards({
  icon,
  chart,
  paragraph,
  heading,
  buttonImage,
  percent,
  paragraph1,
}) {
  return (
    <>
      <section className="padding-16 column gap-10 white-bg fit-content flex-1 border-rad-14 gray-border width-100-800 j-center">
        <section className="space-between wrap-400 gap-10">
          <section className="icon-40 border-rad-50 gray-border j-center align-center">
            <img src={icon} alt="box tick" />
          </section>
          <img src={chart} alt="chart" />
        </section>
        <section>
          <section className="column gap-5">
            <p className="paragraph-0">{paragraph}</p>
            <h1 className="heading-1">{heading}</h1>
          </section>
        </section>
        <section className="row gap-10 align-center wrap-400">
          <button
            className={`padding-4-8 gap-4 row border-rad-1000 heading-5 ${
              buttonImage.includes("trending-down") && "red"
            } no-border`}
          >
            <img
              src={buttonImage}
              alt={
                buttonImage.includes("trending-down")
                  ? "trending down"
                  : "trending up"
              }
            />
            {percent}
          </button>
          <p className="paragraph-2">{paragraph1}</p>
          {console.log(buttonImage)}
        </section>
      </section>
    </>
  );
}
export default ChartCards;
