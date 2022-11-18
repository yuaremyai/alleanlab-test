import React from "react";
import arrow from "../../images/arrow.svg";
import PaginationNumbers from "./PaginationNumbers";

interface Props {
  pagesCount: number;
  page: number;
  setPage: (value: number) => void;
}

function PaginationComponent({ pagesCount, page, setPage }: Props) {

  return (
    <div className="flex justify-center">
      <div className="flex items-center px-2 py-2 mt-4 text-md bg-white rounded-lg drop-shadow-md">
        <img src={arrow} alt="" onClick={() => {if (page > 0) setPage(page-1)}} className="h-4 mr-3" />
        <PaginationNumbers pagesCount={pagesCount} page={page} setPage={setPage}/>
        <img src={arrow} alt="" onClick={() => {if (page+1 < pagesCount) setPage(page+1)}} className="rotate-180 h-4 ml-3" />
      </div>
    </div>
  );
}

export default PaginationComponent;
