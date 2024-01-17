import React from "react";
import "SearchInput.css";

export default function SearchInput() {
  return (
    <div class="input-group">
      <input
        type="text"
        class="input"
        id="Email"
        name="Email"
        placeholder="Ask your Doubts"
        autocomplete="off"
      />
      <input class="button--submit" value="Subscribe" type="submit" />
    </div>
  );
}
