import React from "react";
import { IJob } from "../../../types/types";
import ComponentHeader from "../../UI/ComponentHeader";
import InfoBenefits from "./InfoBenefits";
import InfoEmployment from "./InfoEmployment";

interface Props {
  job: IJob
}


function AdditionalInfo({job}:Props) {
  return (
    <div className="w-full order-last sm:order-none py-2 mt-4 text-primary">
      <ComponentHeader>Additional info</ComponentHeader>
      <InfoEmployment job={job}/>
      <InfoBenefits job={job}/>
    </div>
  );
}

export default AdditionalInfo;
