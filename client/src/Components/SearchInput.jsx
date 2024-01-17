import React from "react";
import "./SearchInput.css";
import IconGrid from "./IconGrid";

export default function SearchInput() {
  return (
    <div className="searchAIDiv">
      <div className="input-group">
        <input
          type="text"
          className="inputAI"
          id="Email"
          name="Email"
          placeholder="How to learn JS"
          autocomplete="off"
        />
        <input className="button--submit" value="Ask AI" type="submit" />
      </div>
      <div className="searchCategories">
        <IconGrid />
        <IconGrid /><IconGrid /><IconGrid /><IconGrid />
      </div>
    </div>
  );
}
