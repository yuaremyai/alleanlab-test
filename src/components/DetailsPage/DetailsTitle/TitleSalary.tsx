import React from "react";
import { IJob} from "../../../types/types";

interface Props {
  job: IJob
}


function TitleSalary({ job }: Props) {
  return (
    <div className="sm:col-span-1 col-span-2 sm:order-none order-last flex sm:flex-col flex-col-reverse sm:text-left text-right">
      <p className="font-bold">€ {job.salary.replaceAll("k", " 000")} </p>
      <p>Brutto, per year</p>
    </div>
  );
}

export default TitleSalary;
