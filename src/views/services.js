import React, { useState, useEffect, useCallback } from "react";
import { getBankAllServices } from "../services/serv.service";
import { Row, Col, Container, Jumbotron } from "reactstrap";
import CardItem from "../components/services/card_item";
import styled from "styled-components";
import Loading from "../components/loading/index";

const Services = () => {
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(false);
  const [hasError, setError] = useState(false);

  const getServices = useCallback(() => {
    setLoading(true);
    getBankAllServices()
      .then((res) => {
        setServices(res.data);
        setLoading(false);
      })
      .catch((err) => setLoading(false));
  }, []);

  useEffect(() => {
    getServices();
  }, [getServices]);

  //mount services
  const mappingServices = (services) =>
    services.map((item, i) => (
      <Col md="6" xl="6" sm="12" xs="12" key={i} className="mb-4">
        <CardItem item={{ ...item, status: true }} />
      </Col>
    ));

  return (
    <BoxServices>
      {hasError ? (
        <div>
          <p>⚠️ Ops...</p> <p>An error happened!</p>
        </div>
      ) : (
        <div>
          <div className="jumbo">
            <SContainer container-fluid>
              <div className="info_bg">
                <h1>Bank S/A</h1>
                <p>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Illum magni facere architecto fugiat iste at error laudantium
                  voluptatum consequatur deserunt eum voluptatem illo fugit,
                  quam nulla adipisci, in ipsa repudiandae! Iure sapiente
                  praesentium, soluta officiis vero ullam autem in facilis
                  cumque nam quas maxime assumenda illum, et porro eveniet.
                  Architecto.
                </p>
              </div>
              <img src="/images/bg_md.svg" alt="" />
            </SContainer>
            {/* </SJumbotron> */}
            <Row>{mappingServices(services)}</Row>
          </div>
        </div>
      )}
    </BoxServices>
  );
};

export default Services;

const BoxServices = styled(Row)``;

const SContainer = styled(Container)`
  display: flex;
  @media (max-width: 929px) {
    img {
      display: none;
    }
  }
  .info_bg {
    text-align: center;
    width: 400px;
    p {
    }
  }
`;
