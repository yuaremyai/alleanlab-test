import React from "react";
import PaginationDots from "./PaginationDots";

function getPages(pagesCount:number, page: number, handleClick:(event:React.MouseEvent<HTMLDivElement>) => void) {
  
  const activeElementStyles = "border-b-2 border-b-indigo px-1 w-8"
  const styles = "border-b-2 border-secondary px-1 w-8"
  const elements = fillList(pagesCount, styles, handleClick)
  elements[page] = <div key={page} className={activeElementStyles}> {page + 1} </div>

  if (pagesCount <= 7) {
    return elements
    }

  if (page <= 3) {
    const pagination = elements.slice(0, 5)
    pagination.push(<div key={pagesCount-2} className={styles}> ... </div>)
    pagination.push(<div key={pagesCount-1} onClick={handleClick} className={styles}> {pagesCount} </div>)
    return pagination
  }

  if (page + 4 >= pagesCount) {
    const pagination = elements.slice(-5)
    pagination.unshift(
        <div key={0} onClick={handleClick} className={styles}> {1} </div>,
        <div key={1} className={styles}> ... </div>
      )
    return pagination
  }

  const pagination: React.ReactNode[] = [
    elements[0],
    <PaginationDots key={1} styles={styles}/>,
    ...elements.slice(page-1, page+2),
    <PaginationDots key={elements.length} styles={styles}/>,
    elements[elements.length-1]
  ]

  return pagination
}

// Return array of pagination elements
function fillList(count:number, styles:string, handleClick:(event:React.MouseEvent<HTMLDivElement>) => void) {
  const elements: React.ReactNode[] = [];
  for (let i = 0; i < count; i++) {
    elements.push(
      <div key={i} onClick={handleClick} className={styles}> {i + 1} </div>
    );
  }
  return elements
}

export default getPages