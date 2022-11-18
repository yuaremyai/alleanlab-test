import { IJob } from "./types/types";

export function getDate(job:IJob) {
    const date1: Date = new Date(job.createdAt);
    const date2: Date = new Date()
     
    return `${date2.getFullYear() - date1.getFullYear()} years ago`;
  }