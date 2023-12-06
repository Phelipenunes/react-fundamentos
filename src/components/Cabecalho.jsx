import Menu from "./Menu.jsx";
import { Styledcabecalho } from "../Style.js";
import { useState } from "react";

function Cabecalho() {
  const [titulo, setTitulo] = useState("Olá react! 👍");

  const mudarTitulo = () => {
    setTitulo("Oie! 😜");
  };

  return (
    <Styledcabecalho>
      <h1 onClick={mudarTitulo}>{titulo}</h1>
      <hr />
      <Menu />
    </Styledcabecalho>
  );
}

export default Cabecalho;
