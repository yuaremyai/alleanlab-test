import React from "react";
import marker from "../../../images/mark.svg";
import { IGeoData } from "../../../types/types";

interface Props {
  geoData: IGeoData;
}

function ContactsStreet({ geoData }: Props) {
  return (
    <div className="flex align-top z-20">
      <span>
        <img src={marker} alt='' className='inline mr-1'/>
        {geoData.formatted}
      </span>
    </div>
  );
}

export default ContactsStreet;
