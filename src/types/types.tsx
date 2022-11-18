export interface ILocation {
  lat: number;
  long: number;
}

export interface IJob {
  address: string;
  benefits: string[];
  createdAt: string;
  description: string;
  email: string;
  employment_type: string[];
  id: string;
  location: ILocation;
  name: string;
  phone: string;
  pictures: string[];
  salary: string;
  title: string;
  updatedAt: string;
}

export interface IGeoData {
  country?: string;
  city?: string;
  name?: string;
  street?: string;
  formatted?: string;
  ocean?: string;
  lat?: number;
  lon?: number;
  address_line1?: string;
  address_line2?: string;
}

export interface IJobProp {
  job: IJob;
  geoData: IGeoData
}
