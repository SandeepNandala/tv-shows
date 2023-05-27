import { Link } from "react-router-dom";

const Show = (props) => {
  const {
    rating,
    name,
    language,
    genres,
    runtime,
    premierd,
    countryName,
    thumbnail,
  } = props;
  return (
    <div className="card mt-3 mb-3">
      <img src={thumbnail} className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title">name : {name}</h5>
        <p className="card-title">rating : {rating}</p>
        <p className="card-title">genres : {genres}</p>
        <p className="card-title">language : {language}</p>
        <p className="card-title">runtime : {runtime}</p>
        <p className="card-title">countryName :{countryName}</p>
        <p className="card-title">premierd :{premierd}</p>
       
      </div>
    </div>
  );
};

export default Show;
