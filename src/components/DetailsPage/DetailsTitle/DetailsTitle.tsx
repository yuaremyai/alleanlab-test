import React from "react";
import { IJob } from "../../../types/types";
import { getDate } from "../../../getDate";
import TitleName from "./TitleName";
import TitleSalary from "./TitleSalary";
import TitleDate from "./TitleDate";

interface Props {
  job: IJob
}


function DetailsTitle({ job }: Props) {
  return (
    <div className="grid grid-cols-3 grid-rows-2 sm:grid-rows-[min-content_min-content] gap-x-10 sm:items-start items-center text-primary">
      <TitleName job={job} />
      <TitleSalary job={job} />
      <TitleDate>Posted {getDate(job)}</TitleDate>
    </div>
  );
}

export default DetailsTitle;
