import http from "../config/http";

const getBankAllServices = () => http.get("/curso");
const getServiceDetails = (id) => http.get(`/curso/${id}`);

export { getBankAllServices, getServiceDetails };
