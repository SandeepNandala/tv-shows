import { useParams } from "react-router-dom";
import axios from "axios";
import { useState, useEffect } from "react";

const ShowDetail = () => {
  const [showInfo, setShowInfo] = useState({});
  const [loading, setLoading] = useState(true);
  const params = useParams();

  const fetchShowDetails = async (params) => {
    try {
      const response = await axios.get(
        `https://api.tvmaze.com/shows/${params.id}`
      );
      const showData = response.data;
      setShowInfo(showData);
      setLoading(false);
    } catch (error) {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchShowDetails(params);
  }, [params.id]);

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
    <div className="d-flex justify-content-center">
      {/* {showInfo && ( */}
      <div>
        <img className="show-detail-img"
          src={
            showInfo.image == null
              ? ""
              : showInfo.image.original || showInfo.image.medium
          }
        />
        <h1 className="mt-3"> Name : {showInfo.name}</h1>
        <p>
          Rating :
          {showInfo.rating.average == null ? "None" : showInfo.rating.average}{" "}
        </p>
        <p>language:{showInfo.language}</p>
        <p>genres:{JSON.stringify(showInfo.genres)}</p>
        <p>runtime={showInfo.runtime}</p>
        <p>premierd={showInfo.premiered}</p>
        <p>
          countryName=
          {showInfo.network == null ? "NA" : showInfo.network.country.name}
        </p>
      </div>
    </div>
  );
};

export default ShowDetail;
