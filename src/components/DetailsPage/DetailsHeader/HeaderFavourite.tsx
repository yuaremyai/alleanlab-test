import React from "react";
import bookmark from "../../../images/bookmark.svg";

function HeaderFavourite() {
  return (
    <div className="flex items-center justify-between">
      <img src={bookmark} alt="" className="h-5" />
      <p className="text-xs">Save to my list</p>
    </div>
  );
}

export default HeaderFavourite;
