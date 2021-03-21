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
          placeholder="Your name"
        />
      </p>
      <p>
        <input
          type="email"
          value={form.email || ""}
          onChange={handleChange}
          name="email"
          placeholder="Your email"
        />
      </p>
      <p>
        <input
          type="date"
          value={form.data_nascimento || ""}
          onChange={handleChange}
          name="data_nascimento"
          placeholder="Your birthdate"
        />
      </p>
      <br />
      <button onClick={submit}>Submit</button>
    </div>
  );
};

export default Client;
