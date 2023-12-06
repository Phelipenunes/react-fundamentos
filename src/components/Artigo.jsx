import { StyledArtigo } from "../Style.js";

function Artigo({ handleClick, titulo, categoria, preco }) {
  return (
    <>
      <StyledArtigo onClick={handleClick}>
        <h3>{categoria}</h3>
        <p>
          <b>Curso: {titulo}</b>
        </p>
        <p>
          <b>Preço: {preco}</b>
        </p>
      </StyledArtigo>
    </>
  );
}

export default Artigo;
