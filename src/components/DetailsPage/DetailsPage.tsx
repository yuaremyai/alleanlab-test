import React from "react";
import { useLocation } from "react-router-dom";
import Contacts from "./Contacts/Contacts";
import DetailsContent from "./DetailsContent";


function DetailsPage() {
  const { state } = useLocation()
  const {job, geoData} = state

  return (
    <div className="grid grid-cols-8 sm:space-x-10 sm:grid-cols-12 sm:px-10 px-2 sm:py-5">
      <DetailsContent job={job}/>
      <Contacts geoData={geoData} job={job}/>
    </div>
  );
}

export default DetailsPage;
