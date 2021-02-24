import React from "react";

import "./search.css";
export default function Search() {
  return (
    <div id="search">
      <form className="form-search ">
        <input
          className="form-control"
          type="search"
          placeholder="Search"
          aria-label="Search"
        />
        <button className="btn-search" id="searchbtn" type="submit">
          Search
        </button>
      </form>
    </div>
  );
}



