import { useEffect, useState, useCallback } from "react";
import { useParams } from "react-router";
import { getServiceDetails } from "../services/serv.service";
import Loading from "../components/loading/index";
import List from "../components/clientList/index";
import Client from "../components/clientService/index";

const Details = (props) => {
  const { id } = useParams();
  const { history } = props;

  const [loading, setLoading] = useState(false);
  const [details, setDetails] = useState({});
  const [update, setUpdate] = useState(false);

  const getDetails = useCallback(async () => {
    try {
      setLoading(true);
      const res = await getServiceDetails(id);
      setDetails(res.data);
      setLoading(false);
      //testando o erro
      console.log(details);
    } catch (error) {
      console.log("error catch");
      history.push("/?error=404");
    }
  }, [id, history]);

  useEffect(() => {
    getDetails();
    setUpdate(false);
  }, [getDetails, update]);

  const detailsPrint = (details) => (
    <div className="details">
      <p>
        <strong>Name: </strong> {details.name}
      </p>
      <p>
        <strong>Manager: </strong> {details.manager}
      </p>
      <p>
        <strong>Description: </strong> {details.description}
      </p>
    </div>
  );

  return (
    <div>
      <h1>Service detail:</h1>
      {loading ? <Loading /> : detailsPrint(details)}
      <hr />
      <Client id={id} update={setUpdate} />
      <hr />
      <List clients={details.clients} update={setUpdate} />
    </div>
  );
};

export default Details;
