import React from "react";
import { IJob } from "../../../types/types";
import EmploymentButton from "./EmploymentButton";

interface Props {
  job: IJob
}


function InfoEmployment({ job }: Props) {
  return (
    <div>
      <p className="my-2">Employment type</p>
      <div className="grid grid-cols-3 gap-2">
        {job.employment_type.map((value, index) => {
          return <EmploymentButton key={index}>{value}</EmploymentButton>;
        })}
      </div>
    </div>
  );
}

export default InfoEmployment;
