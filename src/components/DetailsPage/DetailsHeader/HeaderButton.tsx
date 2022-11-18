import React from "react";
import HeaderFavourite from "./HeaderFavourite";
import HeaderShare from "./HeaderShare";

function HeaderButtons() {
  return (
    <div className="sm:absolute flex ml-auto mt-4 sm:mt-0 right-0">
      <HeaderFavourite />
      <HeaderShare />
    </div>
  );
}

export default HeaderButtons;
