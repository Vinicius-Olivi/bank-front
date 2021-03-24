import React, { useState, useEffect, useCallback } from "react";
import { getBankAllServices } from "../services/serv.service";
import { Row, Col } from "reactstrap";
import CardItem from "../components/services/card_item";

const Services = () => {
  const [services, setServices] = useState([]);
  const [hasError, setError] = useState(false);

  const getServices = useCallback(() => {
    getBankAllServices()
      .then((res) => setServices(res.data))
      .catch((err) => setError(true));
  }, []);

  useEffect(() => {
    getServices();
  }, [getServices]);

  const mappingServices = (services) =>
    services.map((item, i) => (
      <Col md="6" xl="6" sm="12" xs="12" key={i} className="mb-4">
        <CardItem item={{ ...item, status: i > 2 }} />
      </Col>

      // <li className="box" key={i}>
      //   <Link to={`/details/${item.id}`}>{item.name}</Link>
      // </li>
    ));

  return (
    <div className="services">
      {hasError ? (
        <div>
          <p>⚠️ Ops...</p> <p>An error happened!</p>
        </div>
      ) : (
        <Row>{mappingServices(services)}</Row>
      )}
    </div>
  );
};

export default Services;
