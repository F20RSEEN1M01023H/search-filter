import React, { useState, useEffect } from "react";
import "./App.css";

function App() {
  const items = [
    { name: "Apple", color: "Red" },
    { name: "Banana", color: "Yellow" },
    { name: "Cherry", color: "Red" },
    { name: "Date", color: "Brown" },
    { name: "Elderberry", color: "Purple" },
    { name: "Fig", color: "Purple" },
    { name: "Grape", color: "Green" },
    { name: "Honeydew", color: "Green" },
  ];
  const [isDark, setIsDark] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const filteredItems = items.filter((item) =>
    item.name
      .toLowerCase()
      .includes(
        searchTerm.toLowerCase() ||
          item.name.toLowerCase().includes(searchTerm.toLowerCase())
      )
  );
  function handleClick() {
    setIsDark(!isDark);
  }
  useEffect(() => {
    console.log(`Search Term: ${searchTerm}`);
    console.log(`Filtered Items Count: ${filteredItems.length}`);
  }, [searchTerm, filteredItems]);
  return (
    <div
      className={
        isDark
          ? "bg-slate-900 text-white min-h-dvh border rounded-lg w-3xl flex flex-col justify-center items-center"
          : "bg-gray-500 text-black min-h-dvh border rounded-lg w-3xl flex flex-col justify-center items-center"
      }
    >
      <h1 className="mb-3">Search Filter</h1>
      <p className="mb-2">Lorem ipsum dolor sit amet.</p>
      <div>
        <input
          value={searchTerm}
          placeholder="Search item here"
          onChange={(e) => setSearchTerm(e.target.value)}
          type="text"
          className={
            isDark
              ? "border-white border-2 rounded-lg p-3 mt-10"
              : "border-black border-2 rounded-lg p-3 mt-10"
          }
        />
      </div>
      <div>
        {filteredItems.length > 0 ? (
          <ul className="mt-5">
            {filteredItems.map((item, index) => (
              <li className="border-2 rounded-lg my-2 p-2" key={index}>
                <span>{item.name}</span>
                <span>{item.color}</span>
              </li>
            ))}
          </ul>
        ) : (
          <p className="mt-2">items not found.</p>
        )}
      </div>
      <button
        onClick={handleClick}
        className={isDark ? "text-black mt-10" : " mt-10"}
      >
        {isDark ? "Switch to Light Mode" : "Switch to Dark Mode"}
      </button>
    </div>
  );
}

export default App;
