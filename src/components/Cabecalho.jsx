import Menu from "./Menu.jsx";
import { Styledcabecalho } from "../Style.js";

function Cabecalho() {
  return (
    <Styledcabecalho>
      <h1 onClick={() => alert("Exemplo 1")}>Olá react! 👍</h1>
      <hr />
      <Menu />
    </Styledcabecalho>
  );
}

export default Cabecalho;
