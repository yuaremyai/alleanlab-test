import React from "react";
import JobCard from "./JobCard";
import { IJob } from "../../types/types";
import PaginationComponent from "../Pagination/PaginationComponent";

interface Props {
  data: IJob[];
  page: number;
  setPage: (value: number) => void;
}

function JobPage({ data, page, setPage }: Props) {

  return (
    <div className="max-w-screen-xl">
      {data.slice(page * 15, (page + 1) * 15).map((value) => {
        return <JobCard job={value} key={value.id} />;
      })}
      <PaginationComponent
        pagesCount={Math.ceil(data.length / 15)}
        page={page}
        setPage={setPage}
      />
    </div>
  );
}

export default JobPage;
