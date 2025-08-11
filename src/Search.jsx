import { useContext } from "react";
import { Context } from "./Components/DashBoard";

export default function Search({ hamburger }) {
  let context = useContext(Context);
  let query = context.query;
  let setQuery = context.setQuery;
  let setDisplay = context.setDisplay;
  let setSelectedIndex = context.setSelectedIndex;
  return (
    <input
      // type="text"
      // placeholder="Search word..."
      value={query}
      onChange={(e) => {
        setQuery(e.target.value);
        setDisplay("");
        setSelectedIndex(-1);
      }}
      // style={{
      //   width: "100%",
      //   padding: "10px",
      //   fontSize: "16px",
      //   borderRadius: "5px",
      //   border: "1px solid #ccc",
      // }}
      type="search"
      className={`${
        hamburger == "open" && "input-search"
      } no-border border-rad-24 height-48 search-bg`}
      placeholder="Search..."
      onFocus={() => {
        setDisplay("");
      }}
      onBlur={() => {
        setTimeout(() => {
          setDisplay("none");
          setSelectedIndex(-1);
        }, 100);
      }}
    />
  );
}
