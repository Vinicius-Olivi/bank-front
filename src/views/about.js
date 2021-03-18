import React from "react";

const About = () => {
  const [sal, setSal] = React.useState(1050);

  const add = () => {
    setSal(sal + 10);
  };
  const dec = () => {
    setSal(sal - 10);
  };

  return (
    <div>
      <h2>Salario {sal}</h2>
      <hr />

      <button onClick={add}>Add +10 </button>
      <br />
      <button onClick={dec}> Dec -10</button>
    </div>
  );
};

export default About;
