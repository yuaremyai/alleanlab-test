import React from "react";
import getPages from "./getPages";

interface Props {
  pagesCount: number;
  page: number;
  setPage: (value: number) => void;
}

function PaginationNumbers({ pagesCount, page, setPage }: Props) {
  function handleCLick(event: React.MouseEvent<HTMLDivElement>) {
    setPage(Number(event.currentTarget.textContent) - 1);
  }

  return (
    <div className="flex cursor-pointer text-pagination text-center">
      {getPages(pagesCount, page, handleCLick)}
    </div>
  );
}

export default PaginationNumbers;
