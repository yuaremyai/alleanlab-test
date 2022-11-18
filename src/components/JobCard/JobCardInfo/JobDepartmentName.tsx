import React from "react";
import { IJob } from "../../../types/types";

interface Props {
  job: IJob
}

function JobDepartmentName({ job }: Props) {
  return (
    <div className="text-xs text-secondary">Department name • {job.name}</div>
  );
}

export default JobDepartmentName;
