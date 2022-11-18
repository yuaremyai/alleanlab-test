import React from "react";
import ApplyButton from "../UI/ApplyButton";
import { IJob } from "../../types/types";
import DetailsTitle from "./DetailsTitle/DetailsTitle";
import DetailsDescription from "./DetailsDescription";
import AdditionalInfo from "./AdditionalInfo/AdditionalInfo";
import AttachedImages from "./AttachedImages/AttachedImages";
import ReturnButton from "../UI/ReturnButton";

interface Props {
  job: IJob
}

function DetailsBody({ job }: Props) {
  return (
    <div className="w-full flex flex-col sm:items-start items-center">
      <ApplyButton hideOnMobile={true} />
      <DetailsTitle job={job} />
      <DetailsDescription job={job} />
      <ApplyButton />
      <AdditionalInfo job={job} />
      <AttachedImages job={job} />
      <ReturnButton />
    </div>
  );
}

export default DetailsBody;
