import React from "react";

import { IJobProp } from "../../../types/types";
import JobDepartmentName from "./JobDepartmentName";
import JobGeoPos from "./JobGeoPos";
import JobTitle from "./JobTitle";

function JobInfo({ job, geoData }: IJobProp) {
  return (
    <div className="ml-16">
      <JobTitle job={job} geoData={geoData} />
      <JobDepartmentName job={job} />
      <JobGeoPos geoData={geoData} />
    </div>
  );
}

export default JobInfo;
