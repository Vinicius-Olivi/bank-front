import http from "../config/http";

const getBankAllServices = () => http.get("/curso");
const getServiceDetails = (id) => http.get(`/curso/${id}`);

const createServiceClient = (id, data) =>
  http.post(`curso/${id}/inscricao`, data);

const deleteServiceClient = (id_service, id_client) =>
  http.delete(`/curso/${id_service}/inscricao/${id_client}`);

export {
  getBankAllServices,
  getServiceDetails,
  createServiceClient,
  deleteServiceClient,
};
