import React from "react";
import { IGeoData, IJob } from "../../../types/types";
import ContactsCircle from "./ContactsCircle";
import ContactsTextBlock from "./ContactsTextBlock";

interface Props {
  geoData: IGeoData;
  job: IJob;
}

function Contacts({ geoData, job }: Props) {
  const url = `https://maps.geoapify.com/v1/staticmap?style=positron-blue&width=350&height=250&center=lonlat:${geoData.lon},${geoData.lat}&zoom=15&marker=lonlat:${geoData.lon},${geoData.lat};color:%23ffffff;size:large&apiKey=47cc6440188b403eb233e248635302b1`;

  return (
    <div className="col-span-8 sm:col-span-4 h-min sm:max-w-100 space-y-4 text-primary">
      <p className="sm:hidden text-xl font-bold border-b-2 border-secondary w-full pb-2">Contacts</p>
      <div className="relative overflow-hidden flex justify-center flex-col rounded-lg bg-mapBg-light">
        <ContactsCircle />
        <ContactsTextBlock geoData={geoData} job={job} />
        <img
          src={url}
          alt=""
          className="brightness-35 hue-rotate-15 rounded-b-lg"
        />
      </div>
    </div>
  );
}

export default Contacts;
