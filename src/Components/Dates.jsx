import { useRef, useState } from "react";
import files from "../assets/files";
function Dates() {
  let dateText = (newDate) => {
    let monthValue = newDate.toLocaleString("en-us", { month: "long" });
    let dateValue = newDate.toLocaleDateString().split("/");
    dateValue.splice(0, 1);
    return monthValue + " " + dateValue.join(", ");
  };
  let [date, setDate] = useState("");
  let ref = useRef(null);
  let refa = useRef(null);
  return (
    <>
      <section
        className="flex padding-12-16 gap-10 relative pointer"
        onClick={(e) => {
          e.target.style.color = `rgb(${Math.random() * 255},${
            Math.random() * 255
          },${Math.random() * 255})`;
          ref.current.showPicker();
        }}
        ref={refa}
        title="show date picker"
      >
        <input
          type="date"
          className="absolute"
          ref={ref}
          onChange={(e) => {
            setDate((date = e.target.value));
          }}
          value={date}
        />
        <img
          src={files.calendar}
          alt="calendar"
          title="show date picker"
          onClick={() => {
            refa.current.click();
          }}
        />
        <p className="paragraph no-wrap align-center">
          {date == ""
            ? dateText(new Date())
            : dateText(ref.current.valueAsDate)}
        </p>
      </section>
    </>
  );
}
export default Dates;
