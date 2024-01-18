import React from "react";
import "./SearchAIPage.css";
import SearchInput from "../../Components/SearchInput";
import Comment from "../../Components/Comment";
const SearchAIPage = () => {
 
  return (
    <div className="discussion">
      <SearchInput />
      <div className="comments">
        <Comment />
        <Comment /><Comment /><Comment /><Comment /><Comment />
      </div>
      
    </div>
  );
};

export default SearchAIPage;
