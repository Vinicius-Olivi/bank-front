import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
// import axios from "axios";
// import http from "..//config/http";
import { getBankAllServices } from "../services/serv.service";

// const urlApi = "http://localhost:3231/v1/services";

const Services = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    const getServices = async () => {
      const res = await getBankAllServices();
      setServices(res.data);
    };

    getServices();
  }, []);

  return (
    <div className="services">
      <hr />

      <ul>
        {services.map((item, i) => (
          <li key={i}>
            <Link to={`/details/${item.id}`}>{item.name}</Link>
          </li>
        ))}
      </ul>

      <hr />
    </div>
  );
};

export default Services;
