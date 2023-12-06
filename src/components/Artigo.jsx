import { StyledArtigo } from "../Style.js";
import { useState } from "react";

function Artigo({ titulo, categoria, preco }) {
  const [fundo, setFundo] = useState("lightgray");

  const mudarFundo = () => {
    if (fundo === "lightgray") {
      setFundo("yellow");
    } else {
      setFundo("lightgray");
    }
  };
  return (
    <>
      <StyledArtigo onClick={mudarFundo} style={{ backgroundColor: fundo }}>
        <h3>{titulo}</h3>
        <p>
          <b>Curso: {categoria}</b>
        </p>
        <p>
          <b>Preço: {preco}</b>
        </p>
      </StyledArtigo>
    </>
  );
}

export default Artigo;
