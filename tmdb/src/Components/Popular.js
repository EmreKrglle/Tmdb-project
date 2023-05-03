import React from "react";

export default function Popular(props) {
  const selectId = props.selectId;
  const selectMovie = props.selectMovie;
  const popularFilms = props.popularFilms;
  const selectedMovie = props.selectedMovie;


 const posterUrl = "https://image.tmdb.org/t/p/w300/";
  console.log(selectedMovie);
  return (

<div>
      <ul>
        {selectedMovie ? (
          <div>

            <div className="image-imdb">
              <img
                alt={selectedMovie.id}
                src={`${posterUrl}${selectedMovie.poster_path}`}
                className="selectedImg"
              ></img>
              <div className="side-detail">
                <ul className="genresUl">
                  {selectedMovie.genres.map((e) => (
                    <div className="genres">{e.name}</div>
                  ))}
                </ul>
                <div className="vote-average">
                  <h4>Vote </h4>
                  <p>: {selectedMovie.vote_average}</p>{" "}
                </div>
                <div className="release">
                  <p>Release = {selectedMovie.release_date}</p>
                </div>
              </div>{" "}
              {selectedMovie.production_companies.map((e, index) => (
                <a
                  className="companies_atag"
                  href={`https://www.google.com/search?q=${e.name}&sxsrf=APwXEdfIFpMcAtLT2qeGGwidp_ymlMJNqA%3A1680184264100&ei=yJMlZJbJBbGUxc8P25i62AY&ved=0ahUKEwiWzd-R5oP-AhUxSvEDHVuMDmsQ4dUDCA8&uact=5&oq=${e.name}&gs_lcp=Cgxnd3Mtd2l6LXNlcnAQAzIECCMQJzIECCMQJzIECCMQJzINCC4QigUQsQMQgwEQQzIICC4QgAQQsQMyCAguEIAEELEDMggILhCABBCxAzIICC4QgAQQsQMyCwguEIAEELEDEIMBMgsILhCKBRCxAxCDAToHCCMQ6gIQJzoNCC4QxwEQrwEQ6gIQJzoECC4QJzoLCAAQgAQQsQMQgwE6CwgAEIoFELEDEIMBOgUIABCABDoHCAAQigUQQzoICAAQgAQQsQM6CwguEIAEEMcBENEDOgsILhCABBDHARCvAToRCC4QgAQQsQMQgwEQxwEQrwE6BwguEIoFEENKBAhBGAFQgAZYmQlgoRJoA3AAeACAAYEBiAHLA5IBAzEuM5gBAKABAbABCsABAQ&sclient=gws-wiz-serp`}
                  target="blank"
                  key={index}
                >
                  <img
                    className="companies_logo"
                    alt={e.id}
                    src={`${posterUrl}${e.logo_path}`}
                  ></img>
                </a>
              ))}
            </div>

            <h2>
              {selectedMovie && <div>{selectedMovie.original_title}</div>}
            </h2>
            <h4 className="overview">{selectedMovie.overview}</h4>

            <button className="back" onClick={() => selectMovie(null)}>
              Back
            </button>
          </div>
        ) : (
          <div className="populerMovie">
            {popularFilms &&
              popularFilms.results.map((e, index) => {
                return (
                  <div>
                    <h3 className="title"> {e.original_title} </h3>

                    <div key={index} className="pList">
                      <img
                        className="populerImage"
                        alt={e.id}
                        src={`${posterUrl}${e.poster_path}`}
                        onClick={(e) => selectId(e.target.alt)}
                      />
                    </div>
                  </div>
                );
              })}
          </div>
        )}
      </ul>
    </div>
  );
}
