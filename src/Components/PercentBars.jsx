function PercentBars({ platForm, money, percent }) {
  return (
    <>
      <section className="width-100 gap-16 column">
        <h3 className="heading-3">{platForm}</h3>
        <section className="progress">
          <p
            className="percent"
            style={{
              width: percent,
              background: `rgb(${Math.random() * 250},${
                Math.random() * 255
              },${Math.random() * 255 })`,
            }}
          ></p>
        </section>
        <section className="space-between">
          <h3 className="heading-3-light">{money}</h3>
          <h3 className="heading-3-light">{percent}</h3>
        </section>
      </section>
    </>
  );
}
export default PercentBars;
