import React from "react";
import { IJob } from "../../../types/types";

interface Props {
  job: IJob
}

function TitleName({ job }: Props) {
  return <div className="col-span-3 sm:col-span-2 font-bold">{job.title}</div>;
}

export default TitleName;
