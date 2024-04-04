import PercentBars from "./PercentBars";
function TopPlatforms() {
    return (
      <>
        <section
          className="white-bg padding-16 gap-20 column border-rad-8 gray-border minwidth-40"
        >
          <section className="row space-between gap-10 wrap-400">
            <h3 className="heading-3">Top Platform</h3>
            <h3 className="heading-3 green">See All</h3>
          </section>
          <section className="gap-20 column scroll bar-container">
            <PercentBars
              platForm="Book Bazaar"
              money="$2,500,000"
              percent="+15%"
            />
            <PercentBars
              platForm="Artisan Aisle"
              money="$1,800,000"
              percent="+10%"
            />
            <PercentBars
              platForm="Toy Troop"
              money=" $1,200,000"
              percent="+8%"
            />
            <PercentBars platForm="XStore" money=" $1,500,000" percent="25%" />
          </section>
        </section>
      </>
    );
}
export default TopPlatforms
