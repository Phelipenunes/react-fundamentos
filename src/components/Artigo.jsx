import { StyledArtigo } from "../Style.js";

/* const data = [
  "25/10/2001",
  "30/08/1992",
  "30/02/2024"
] */

function Artigo(props) {
  return (
    <>
      <StyledArtigo>
        <h3>
          {props.titulos} {props.icone}
        </h3>
        <p> {props.descricao}</p>
        <p>lançado em : {props.datalancamento}</p>
      </StyledArtigo>
    </>
  );
}

export default Artigo;
