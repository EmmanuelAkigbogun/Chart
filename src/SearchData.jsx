import { useContext, useEffect, useRef, useState } from "react";
import { Context } from "./Components/DashBoard";
import files from "./assets/files";

const wordList = [
  "apple",
  "banana",
  "orange",
  "grape",
  "watermelon",
  "mango",
  "pineapple",
  "strawberry",
  "blueberry",
  "kiwi",
  "peach",
  "plum",
  "apricot",
  "cherry",
  "fig",
  "guava",
  "lemon",
  "lime",
  "nectarine",
  "papaya",
  "egg",
  "ant",
];

export default function SearchData() {
  const context = useContext(Context);
  const query = context.query;
  const display = context.display;
  const setQuery = context.setQuery;
  const setDisplay = context.setDisplay;
  const selectedIndex = context.selectedIndex;
  const setSelectedIndex = context.setSelectedIndex;
  const itemRefs = useRef([]);
  const filteredWords = wordList
    .filter((word) => word.toLowerCase().includes(query.toLowerCase()))
    .slice(0, 7);

  // Handle key presses
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (display === "none") return;

      if (e.key === "ArrowDown") {
        e.preventDefault();
        setSelectedIndex((prev) => (prev + 1) % filteredWords.length);
      } else if (e.key === "ArrowUp") {
        e.preventDefault();
        setSelectedIndex((prev) =>
          prev <= 0 ? filteredWords.length - 1 : prev - 1
        );
      } else if (e.key === "Enter" && selectedIndex >= 0) {
        setQuery(filteredWords[selectedIndex]);
        setDisplay("none");
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [filteredWords, selectedIndex, display]);

  // Scroll selected item into view
  useEffect(() => {
    if (selectedIndex >= 0 && itemRefs.current[selectedIndex]) {
      itemRefs.current[selectedIndex].scrollIntoView({
        behavior: "smooth",
        block: "nearest",
      });
    }
  }, [selectedIndex]);

  return (
    <div
      className={`search-list box-shadow-black white-bg fixed-position width-100 border-rad-14 ${display}`}
    >
      <ul className={`list-style`}>
        {filteredWords.map((word, index) => (
          <li
            key={index}
            ref={(el) => (itemRefs.current[index] = el)}
            onClick={() => {
              setQuery(word);
              setDisplay("none");
            }}
            className={`align-center list-border pointer gap-10 padding-10 paragraph-1 ${
              selectedIndex === index ? "selected-bg" : ""
            }`}
          >
            <img src={files.search} alt="search-icon" className="icon-20" />
            <span>{word}</span>
          </li>
        ))}

        {query && filteredWords.length === 0 && (
          <li className="padding-10">No matches found.</li>
        )}
      </ul>
      <div className={`${display} padding-10 space-between`}>
        <a href="http://google.com"> Give feedbacks</a>
        <a href="http://akigbogun.vercel.app"> akigbogun.vercel.app</a>
      </div>
    </div>
    
  );
}
