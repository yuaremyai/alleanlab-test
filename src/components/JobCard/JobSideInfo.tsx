import React from 'react'
import bookmark from "../../images/bookmark.svg";
import star from "../../images/star.svg";

interface Props{
    date: string
}

const stars: React.ReactNode[] = [];
for (let i = 0; i < 5; i++) {
  stars.push(<img src={star} alt="" className="h-2" key={i} />);
}

function JobSideInfo({date}: Props) {
  return (
    <div className="flex justify-between ml-16 sm:flex-col sm:justify-between sm:items-end">
        <img src={bookmark} alt="favorite" className="h-5 hidden sm:inline-block"/>
        <div className="flex items-center">{stars}</div>
        <div className="text-xs text-right text-secondary">
          Posted {date}
        </div>
      </div>
  )
}

export default JobSideInfo