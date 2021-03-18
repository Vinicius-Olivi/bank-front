import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { getServiceDetails } from "../services/serv.service";

const oneSec = 1000;

const Details = () => {
  const { id } = useParams();
  const [loading, setLoading] = useState(false);
  const [details, setDetails] = useState({});

  useEffect(() => {
    setLoading(true);
    const getDetails = async () => {
      const res = await getServiceDetails(id);
      setTimeout(() => {
        setDetails(res.data);
        setLoading(false);
      }, oneSec);
    };
    getDetails();
  }, [id]);

  return (
    <div>
      <h1>Detalhamento do servico</h1>
      {loading ? (
        <h2>Loading...</h2>
      ) : (
        <div className="details">
          <p>
            <strong>Name: </strong> {details.name}
          </p>
          <p>
            <strong>Coordinator: </strong> {details.coordinator}
          </p>
        </div>
      )}
    </div>
  );
};

export default Details;
