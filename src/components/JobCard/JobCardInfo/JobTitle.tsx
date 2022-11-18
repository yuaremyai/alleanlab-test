import React from "react";
import { useNavigate } from "react-router-dom";
import { IJobProp } from "../../../types/types";

function JobTitle({ job, geoData }: IJobProp) {
  const navigate = useNavigate()
  function handleClick(event:React.MouseEvent<HTMLDivElement>) {
    navigate(`/details/${job.id}`, {state: {job: job, geoData: geoData}})
  }
  return <div onClick={handleClick} className="text-sm text-primary font-medium">{job.title}</div>;
}

export default JobTitle;
