import React, { useEffect, useState } from "react";
import { IJob, IGeoData } from "../../types/types";
import JobInfo from "./JobCardInfo/JobInfo";
import JobSideInfo from "./JobSideInfo";
import { getDate } from "../../getDate";

interface Props {
  job: IJob;
}

function JobCard({ job}: Props) {
  const [geoData, setGeoData] = useState<IGeoData>({});

    useEffect(() => {
      fetch(
        `https://api.geoapify.com/v1/geocode/reverse?lat=${job.location.lat}&lon=${job.location.long}&apiKey=47cc6440188b403eb233e248635302b1`
      )
        .then((response) => response.json())
        .then((result) => setGeoData(result.features[0].properties))
        .catch((error) => console.log("error", error));
    }, []);

  return (
    <div className="relative flex justify-between flex-col-reverse sm:flex-row bg-gray-100 sm:bg-white rounded-lg mt-1 px-2 py-4 drop-shadow-md">
      <img
        src={job.pictures[0]}
        alt=""
        className=" absolute top-8 sm:top-4 rounded-full h-10 aspect-square"
      />
      <JobInfo job={job} geoData={geoData} />
      <JobSideInfo date={getDate(job)}/>
    </div>
  );
}

export default JobCard;
