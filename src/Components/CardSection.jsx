import ChartCards from "./ChartCards";
import files from "../assets/files";
function CardSection() {
  return (
    <>
      <section className="column gap-16 minwidth-40 gap-10-800">
        <section className="row gap-16 column-800 gap-10-800 height-100">
          <ChartCards
            icon={files.boxTick}
            chart={files.chart2}
            paragraph="Total Order"
            heading="350"
            buttonImage={files.trendingUp}
            percent="23,5%"
            paragraph1="vs. previous month"
          />
          <ChartCards
            icon={files.refund}
            chart={files.chart1}
            paragraph="Total Refund"
            heading="270"
            buttonImage={files.trendingDown}
            percent="23,5%"
            paragraph1="vs. previous month"
          />
        </section>
        <section className="row gap-16 column-800 gap-10-800 height-100">
          <ChartCards
            icon={files.cart}
            chart={files.chart1}
            paragraph="Average Sales"
            heading="1567"
            buttonImage={files.trendingDown}
            percent="23,5%"
            paragraph1="vs. previous month"
          />
          <ChartCards
            icon={files.boxTick}
            chart={files.chart2}
            paragraph="Total Income"
            heading="$350.00"
            buttonImage={files.trendingUp}
            percent="23,5%"
            paragraph1="vs. previous month"
          />
        </section>
      </section>
    </>
  );
}
export default CardSection;
