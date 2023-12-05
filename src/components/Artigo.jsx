import { StyledArtigo } from "../Style.js";

function Artigo(props) {
  return (
    <>
      <StyledArtigo>
        <h3>
          {props.titulos} {props.icone}
        </h3>
        <p> {props.descricao}</p>
        <p>lançado em : {props.datalancamento}</p>
        <img src={props.imagem} />
        {props.children}
      </StyledArtigo>
    </>
  );
}

export default Artigo;
