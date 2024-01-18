import React from "react";
import "./SearchAIPage.css";
import SearchInput from "../../Components/SearchInput";
import Comment from "../../Components/Comment";
// import IconGrid from "./../Components/IconGrid";
import IconGrid from "../../Components/IconGrid"

const SearchAIPage = () => {
  return (
    <div className="AI-page-wrapper">
      <div className="search-section">
        <div className="discussion">
          <SearchInput />
          <div className="comments">
            <Comment />
            <Comment />
            <Comment />
            <Comment />
            <Comment />
            <Comment />
          </div>
        </div>
      </div>

      <div className="search-categories-section">
        <div className="searchCategories">
        <IconGrid />
        <IconGrid />
        <IconGrid />
        <IconGrid />
        <IconGrid />
      </div>
      </div>
    </div>
  );
};

export default SearchAIPage;
