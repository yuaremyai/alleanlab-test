import React, { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import { IJob } from "./types/types";
import JobPage from "./components/JobCard/JobPage";
import DetailsPage from "./components/DetailsPage/DetailsPage";

function App() {
  const [data, setData] = useState<IJob[]>([]);
  const [page, setPage] = useState<number>(0);

  useEffect(() => {
    fetch(
      "https://api.json-generator.com/templates/ZM1r0eic3XEy/data?access_token=wm3gg940gy0xek1ld98uaizhz83c6rh2sir9f9fu"
    )
      .then((response) => response.json())
      .catch((error) => {
        console.log(error);
      })
      .then((fetchData) => {
        setData(fetchData);
      });
  }, []);


  return (
    <BrowserRouter basename="/">
      <div className="flex justify-center py-5">
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
