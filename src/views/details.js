import { useEffect, useState, useCallback } from "react";
import { useParams } from "react-router";
import { getServiceDetails } from "../services/serv.service";
import { Button, Col, Container, Jumbotron, Nav, Navbar } from "reactstrap";
import Loading from "../components/loading/index";
import List from "../components/clientList/index";
import Client from "../components/clientService/index";
import styled from "styled-components";

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
    <SJumbotron>
      <div className="display-4">{name}</div>
      <p className="lead">
        <strong>Manager: </strong> {manager}
      </p>
    </SJumbotron>
  );

  const Menu = () => (
    <Navbar color="none" expand="md mb-4">
      <Nav className="mr-auto" navbar>
        <Button
          onClick={() => setClient(!isClient)}
          color={!isClient ? "info" : "info"}
          size="sm"
        >
          {!isClient ? "Add new" : "Client List"}
        </Button>
      </Nav>
    </Navbar>
  );

  const mountScreen = (details) => (
    <DetailsAll responsive>
      {detailsService(details)}
      {Menu()}

      {isClient ? (
        <Client id={id} update={setUpdate} />
      ) : (
        <List clients={details.clients} update={setUpdate} />
      )}
    </DetailsAll>
  );

  return loading ? <Loading /> : mountScreen(details);
};

export default Details;

const SJumbotron = styled(Jumbotron)`
  background-color: rgb(206, 59, 87, 0.1);
  text-align: center;
  /* background-color: #fff; */
`;

const DetailsAll = styled.div`
  width: 100%;
  margin-left: 72px;
  align-items: center;
  justify-content: center;
  @media (max-width: 930px) {
    margin-left: 0;
  }
`;
