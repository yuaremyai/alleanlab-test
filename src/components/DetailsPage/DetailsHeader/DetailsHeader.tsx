import React from "react";
import ComponentHeader from "../../UI/ComponentHeader";
import HeaderButtons from "./HeaderButton";


function DetailsHeader() {
  return (
      <div className="sm:flex relative items-center justify-between py-2 text-primary">
        <ComponentHeader>Job Details</ComponentHeader>
        <HeaderButtons />
      </div>
  );
}

export default DetailsHeader;
