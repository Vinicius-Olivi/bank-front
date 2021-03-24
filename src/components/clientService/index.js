import { useState } from "react";
import { createServiceClient } from "../../services/serv.service";

const Client = ({ id, update }) => {
  const [form, setForm] = useState({});

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const submit = () => {
    createServiceClient(id, form)
      .then(() => {
        alert(`Client ${form.name} registered! `);
        setForm({});
        update(true);
      })
      .catch((error) => console.log("an error happened"));
  };

  return (
    <div id="formClient">
      <p>
        {" "}
        <input
          type="text"
          value={form.name || ""}
          onChange={handleChange}
          name="name"
          placeholder="name: "
          autoFocus
          required
        />
      </p>
      <p>
        <input
          type="email"
          value={form.email || ""}
          onChange={handleChange}
          name="email"
          placeholder="email: "
          required
        />
      </p>
      <p>
        <input
          type="text"
          value={form.address || ""}
          onChange={handleChange}
          name="address"
          placeholder="address: "
          required
        />
      </p>
      <p>
        <input
          type="number"
          value={form.value || ""}
          onChange={handleChange}
          name="value"
          placeholder="Proposed value: £"
          min="0"
          required
        />
      </p>
      <br />
      <button onClick={submit}>Submit</button>
    </div>
  );
};

export default Client;
