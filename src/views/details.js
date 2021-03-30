import { useEffect, useState, useCallback } from "react";
import { useParams } from "react-router";
import { getServiceDetails } from "../services/serv.service";
import { Button, Jumbotron, Nav, Navbar } from "reactstrap";
import Loading from "../components/loading/index";
import List from "../components/clientList/index";
import Client from "../components/clientService/index";

const Details = (props) => {
  const { id } = useParams();
  const { history } = props;

  const [loading, setLoading] = useState(false);
  const [details, setDetails] = useState({});
  const [update, setUpdate] = useState(false);
  const [isClient, setClient] = useState(true);

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

  const detailsService = ({ name, manager }) => (
    <Jumbotron>
      <div className="display-4">{name}</div>
      <p className="lead">
        <strong>Manager: </strong> {manager}
      </p>
    </Jumbotron>
  );

  const Menu = () => (
    <Navbar color="none" expand="md mb-4">
      <Nav className="mr-auto" navbar>
        <Button
          onClick={() => setClient(!isClient)}
          color={!isClient ? "info" : "info"}
          size="sm"
        >
          {!isClient ? "Client List" : "Add new"}
        </Button>
      </Nav>
    </Navbar>
  );

  const mountScreen = (details) => (
    <div>
      {detailsService(details)}
      {Menu()}

      {isClient ? (
        <Client id={id} update={setUpdate} />
      ) : (
        <List clients={details.clients} update={setUpdate} />
      )}
    </div>
  );

  return loading ? <Loading /> : mountScreen(details);
};

export default Details;
