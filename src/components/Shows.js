import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Show from "./Show";

const Shows = () => {
  const [shows, setShows] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showName, setShowname] = useState("avengers");

  const fetchShowsData = async (showName) => {
    try {
      const response = await axios.get(
        `https://api.tvmaze.com/search/shows?q=${showName}`
      );
      const showsData = response.data;
      // console.log(showsData);
      setShows(showsData);
    } catch (error) {
    }
  };

  useEffect(() => {
    fetchShowsData(showName);
    setLoading(false);
  }, [showName]);

  const searchShow = (e) => {
    if (e.keyCode === 13) {
      setShowname(e.target.value);
      document.getElementById("search-bar").value = "";
      setLoading(true);
    }
  };

  if (loading) {
    return (
      <div
        className="d-flex justify-content-center"
        style={{ marginTop: "20rem" }}
      >
        <div className="spinner-border" role="status">
          <span className="visually-hidden align-self-baseline">
            Loading...
          </span>
        </div>
      </div>
    );
  }

  return (
    <div className="container">
      <div className="d-flex justify-content-around">
        <div className="input-group m-3 w-25">
          <input
            type="text"
            id="search-bar"
            className="form-control shadow-none"
            placeholder="Enter Show.."
            onKeyDown={searchShow}
          />
        </div>
      </div>
      <h1 className="text-center m-3"></h1>
      <h1 className="text-center m-3">All Shows</h1>
      <div className="d-flex justify-content-around flex-wrap m-3">
        {shows &&
          shows.map((data) => (
            <div>
              <Link
                to={`/tv-shows/details/${data.show.id}`}
                className="btn btn-primary text-center"
              >
               {data.show.name}
              </Link>
              <Show
                rating={data.show.rating.average==null? "None":data.show.rating.average}
                name={data.show.name}
                language={data.show.language}
                genres={JSON.stringify(data.show.genres)}
                runtime={data.show.runtime}
                premierd={data.show.premiered}
                countryName={ data.show.network==null ? "NA": data.show.network.country.name}
                thumbnail={data.show.image==null ? "":data.show.image.medium}
                key={Math.random()}
              />
            </div>
          ))}
      </div>
    </div>
  );
};

export default Shows;
