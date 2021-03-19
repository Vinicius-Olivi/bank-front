import "./style.css";

const List = ({ clients }) => {
  return (
    <div>
      {clients && clients.length ? (
        <table border="1">
          <thead>
            <tr>
              <th>Name</th>
              <th>Birth</th>
              <th>Email</th>
            </tr>
          </thead>
          <tbody>
            {clients.map((v, i) => (
              <tr>
                <td>{v.name}</td>
                <td>{new Date(v.data_nascimento).toLocaleDateString()}</td>
                <td>{v.email}</td>
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
