import React from "react";
import share from "../../../images/share.svg";

function HeaderShare() {
  return (
    <div className="flex items-center justify-between px-2">
      <img src={share} alt="" className="h-4 mr-1" />
      <p className="text-xs">Share</p>
    </div>
  );
}

export default HeaderShare;
