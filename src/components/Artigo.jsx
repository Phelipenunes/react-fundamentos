import { StyledArtigo } from "../Style.js";

function Artigo({ titulo, categoria, preco }) {
  return (
    <>
      <StyledArtigo>
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
