import { useState } from "react";
import { useParams } from "react-router";
import { deleteServiceClient } from "../../services/serv.service";
import {
  Button,
  Table,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
} from "reactstrap";
import styled from "styled-components";

const List = ({ clients, update }) => {
  const { id: id_service } = useParams();
  const [modal, setModal] = useState({ isOpen: false, data: null });

  const deleteClient = () => {
    if (modal.data.id) {
      deleteServiceClient(id_service, modal.data.id)
        .then(() => {
          alert(`Client deleted! `);
          update(true);
        })
        .catch((error) => console.log("an error happened.."));
    }
  };

  const toggleModal = (data = null) => {
    setModal({
      isOpen: !modal.isOpen,
      data,
    });
  };

  return (
    <div>
      {clients && clients.length ? (
        <div>
          <Table responsive>
            <thead>
              <TableHeader>
                <th>Name</th>
                <th>Email</th>
                <th>Adress</th>
                <th>Value</th>
                <th>Action</th>
              </TableHeader>
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
                      <Button
                        size="sm"
                        color="danger"
                        onClick={() => toggleModal(v)}
                      >
                        Delete
                      </Button>
                    </td>
                  </tr>
                ))}
            </tbody>
          </Table>
          <Modal isOpen={modal.isOpen} toggle={toggleModal}>
            <ModalHeader toggle={toggleModal}>Delete client</ModalHeader>
            <ModalBody>
              Do you want delete {modal?.data?.client_name} ?
            </ModalBody>
            <ModalFooter>
              <Button color="info" onClick={deleteClient}>
                Confirm
              </Button>
              <Button color="secondary" onClick={toggleModal}>
                Cancel
              </Button>
            </ModalFooter>
          </Modal>
        </div>
      ) : (
        <div>
          <h3>No client yet...</h3>
        </div>
      )}
    </div>
  );
};

export default List;

const TableHeader = styled.tr`
  th:nth-child(1) {
    min-width: 200px;
  }
`;
