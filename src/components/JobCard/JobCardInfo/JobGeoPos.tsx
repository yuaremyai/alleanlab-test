import React from "react";
import mark from "../../../images/mark.svg";
import { IGeoData } from "../../../types/types";

interface Props {
  geoData?: IGeoData;
}

function JobGeoPos({ geoData }: Props) {
  return (
    <div className="flex text-xs text-secondary">
      <img src={mark} alt="" className="w-2 mr-1" />
      {!geoData?.country
        ? <div>{geoData?.name}</div>

        : <div> {`${geoData?.city ? geoData?.city + ',' : ''}`} {geoData?.country} </div>
      }
    </div>
  );
}

export default JobGeoPos;
