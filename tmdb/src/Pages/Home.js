import React from "react";

import Popular from "../Components/Popular";
import Paging from "../Components/Paging";
import { useEffect, useState } from "react";

export default function Home() {
  
  
  
  const main_url = "https://api.themoviedb.org/3";
  const api_key = "api_key=5003127761e08e287f66ca90f88ab289";
  const [popularFilms, showPFilms] = useState();
  const [selectedId, selectId] = useState();
  const [selectedMovie, selectMovie] = useState();
  const [number, setNumber] = useState();
  
  
  
  useEffect(() => {
    if (selectedId) {
      fetch(`${main_url}/movie/${selectedId}?${api_key}`)
        .then((e) => e.json())
        .then((e) => selectMovie(e));
    }

    fetch(
      `${main_url}/discover/movie?${api_key}&sort_by=popularity.desc&page=${number}`
    )
      .then((e) => e.json())
      .then((e) => showPFilms(e));
  }, [selectedId, number]);
  return (
    < >
      <div>
        <div className="ayse">emre</div>
        <Popular
          popularFilms={popularFilms}
          selectId={selectId}
          selectedMovie={selectedMovie}
          selectedId={selectedId}
          selectMovie={selectMovie}
        ></Popular>
        {selectedId ? "" : <Paging setNumber={setNumber} />}
      </div>
      
    </>
  );
  
}
