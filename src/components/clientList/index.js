import { useParams } from "react-router";
import { deleteServiceClient } from "../../services/serv.service";
import "./style.css";

const List = ({ clients, update }) => {
  const { id: id_service } = useParams();

  const deleteClient = (id_client) => {
    deleteServiceClient(id_service, id_client)
      .then(() => {
        alert(`Client deleted! `);
        update(true);
      })
      .catch((error) => console.log("an error happened.."));
  };

  return (
    <div>
      {clients && clients.length ? (
        <table border="1">
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Adress</th>
              <th>Value</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {clients &&
              clients.map((v, i) => (
                <tr key={i}>
                  <td>{v.client_name}</td>
                  <td>{v.client_email}</td>
                  <td>{v.client_address}</td>
                  <td>{v.value}</td>
                  <td>
                    <button onClick={() => deleteClient(v.id)}>Delete</button>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      ) : (
        <div>
          <h3>No client yet...</h3>
        </div>
      )}
    </div>
  );
};

export default List;
