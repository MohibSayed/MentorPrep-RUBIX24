import React from "react";
import "./SearchInput.css";

export default function SearchInput() {
  return (
    <div className="searchAIDiv">
      <div className="input-group">
        <input
          type="text"
          className="inputAI"
          id="Email"
          name="Email"
          placeholder="Ask with AI"
          autocomplete="off"
        />
        <input className="button--submit" value="AI" type="submit" />
      </div>
      
    </div>
  );
}
