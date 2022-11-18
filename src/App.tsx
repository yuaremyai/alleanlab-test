import React, { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import { IJob } from "./types/types";
import JobPage from "./components/JobCard/JobPage";
import DetailsPage from "./components/DetailsPage/DetailsPage";

import { arrOfData } from "./zapaska";

function App() {
  const [data, setData] = useState<IJob[]>([]);
  const [page, setPage] = useState<number>(0);

  useEffect(() => {
    // const job: IJob = {
    //   id: "635ee6d304601d61a71951f6",
    //   name: "Sureplex",
    //   email: "sureplex@gmail.bo",
    //   phone: "+97117307890",
    //   title:
    //     "Ut veniam occaecat aute adipisicing eiusmod non pariatur enim enim cupidatat nulla ipsum eiusmod.",
    //   salary: "60k-71k",
    //   address: "76 Blende Jardine Place",
    //   benefits: ["Pay vocations", "Flexible hours"],
    //   location: {
    //     lat: 9.804124,
    //     long: 147.139488,
    //   },
    //   pictures: [
    //     "https://picsum.photos/200/300",
    //     "https://picsum.photos/200/300",
    //     "https://picsum.photos/200/300",
    //   ],
    //   createdAt: "2012-05-04T01:38:26.141Z",
    //   updatedAt: "2012-05-05T01:38:26.141Z",
    //   description:
    //     "\n  Reprehenderit Lorem consectetur non et minim adipisicing deserunt. Ipsum reprehenderit do pariatur proident esse sint magna ullamco qui minim. Anim Lorem ut laborum occaecat culpa consectetur reprehenderit aliquip ex cupidatat proident quis laborum. Nulla aute ipsum et anim.\n  \n  Responsopilities:\n    Ex qui consequat deserunt laborum cupidatat ut ullamco veniam minim nisi incididunt aliquip incididunt. Sunt sunt ullamco elit ipsum ea enim consectetur sit magna minim ea cupidatat. Et ut proident voluptate quis nulla anim commodo in pariatur ad.\n  \nCompensation & Benefits:\n\t    Incididunt et sint incididunt laboris duis. Deserunt consectetur sint aute et sint aliqua quis nostrud non elit aliqua elit tempor. Aliquip ad dolore proident eu consequat elit amet laborum aute excepteur sit labore.\n\n",
    //   employment_type: ["Full time", "Part time", "Permanent"],
    // };
    // setData(Array(44).fill(job));
    setData(arrOfData)
    // fetch(
    //   "https://api.json-generator.com/templates/ZM1r0eic3XEy/data?access_token=wm3gg940gy0xek1ld98uaizhz83c6rh2sir9f9fu"
    // )
    //   .then((response) => response.json())
    //   .catch((error) => {
    //     console.log(error);
    //   })
    //   .then((fetchData) => {
    //     setData(fetchData);
    //   });
  }, []);

  useEffect(() => {
    console.log(data);
  }, [data]);

  return (
    <BrowserRouter>
      <div className="flex justify-center bg-mainBg py-5">
        <div className="max-w-6xl">
          <Routes>
            <Route
              path="/"
              element={<JobPage data={data} page={page} setPage={setPage} />}
            />
            <Route
              path="/details/:id"
              element={<DetailsPage />}
            />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
