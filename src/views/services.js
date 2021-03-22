import React, { useState, useEffect, useCallback } from "react";
import { Link } from "react-router-dom";
import { getBankAllServices } from "../services/serv.service";

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
      <li key={i}>
        <Link to={`/details/${item.id}`}>{item.name}</Link>
      </li>
    ));

  return (
    <div className="services">
      {hasError ? (
        <div>
          <p>⚠️ Ops...</p> <p>An error happened!</p>
        </div>
      ) : (
        <ul>{mappingServices(services)}</ul>
      )}

      <hr />
    </div>
  );
};

export default Services;
