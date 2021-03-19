import { useEffect, useState, useCallback } from "react";
import { useParams } from "react-router";
import { getServiceDetails } from "../services/serv.service";
import Loading from "../components/loading/index";
import List from "../components/clientList/index";
import Client from "../components/clientService/index";

const Details = (props) => {
  const { id } = useParams();
  const [loading, setLoading] = useState(false);
  const [details, setDetails] = useState({});
  const oneSec = 1000;

  const getDetails = useCallback(async () => {
    try {
      setLoading(true);
      const res = await getServiceDetails(id);
      setTimeout(() => {
        setDetails(res.data);
        setLoading(false);
      }, oneSec);
    } catch (error) {
      props.history.push("/?error=404");
    }
  }, [id, props]);

  useEffect(() => {
    getDetails();
  }, [getDetails]);

  const detailsPrint = (details) => (
    <div className="details">
      <p>
        <strong>Name: </strong> {details.name}
      </p>
      <p>
        <strong>Coordinator: </strong> {details.coordinator}
      </p>
    </div>
  );

  return (
    <div>
      <h1>Detalhamento do servico</h1>
      {loading ? <Loading /> : detailsPrint(details)}
      <hr />
      <Client />
      <hr />
      <List clients={details.subscriptions} />
    </div>
  );
};

export default Details;
