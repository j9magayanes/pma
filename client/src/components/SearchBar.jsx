import React, { useState } from "react";
import Header from "../components/Header";
import "../index.css";

export default function SearchBar() {
  const [search, setSearch] = useState("");
  return (
    <div>
      <form action="">
        <div className="search-form">
          <div className="row">
            <div className="search-bar">
              {/* <label htmlFor="name">Name</label> */}
              <input
              value="search"
              onChange={(e) => setSearch(e.target.value)}
              id="name"
              className="form-control"
              type="text"
              />
            </div> 
            <div className="search-button">
            <button
            type="submit"
            className="button"
            >
            Submit
            </button>
            </div>
          </div>
        </div>
    </form>
    </div>
  );
}
