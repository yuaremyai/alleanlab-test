import React from "react";
import { IJob } from "../../../types/types";
import BenefitsButton from "./BenefitsButton";

interface Props {
  job: IJob
}


function InfoBenefits({ job }: Props) {
  return (
    <div>
      <p className="my-2">Benefits</p>
      <div className="grid grid-cols-3 gap-2">
        {job.benefits.map((value, index) => {
          return <BenefitsButton key={index}>{value}</BenefitsButton>
        })}
      </div>
    </div>
  );
}

export default InfoBenefits;
