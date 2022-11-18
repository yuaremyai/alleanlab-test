import React from "react";
import DetailsHeader from "./DetailsHeader/DetailsHeader";
import DetailsBody from "./DetailsBody";

import { IJob  } from "../../types/types";

interface Props {
  job: IJob
}

function DetailsContent({ job }: Props) {
  return (
    <div className="col-span-8 max-w-xl">
      <DetailsHeader />
      <DetailsBody job={job} />
    </div>
  );
}

export default DetailsContent;
