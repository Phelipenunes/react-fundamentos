import styled from "styled-components";

//Cabeçalho
export const Styledcabecalho = styled.header`
  background-color: black;
  color: white;
  font-size: 1.2rem;
  font-weight: bold;
  text-align: center;

  hr {
    width: 50%;
    background-color: pink;
    border: none;
    height: 4px;
    margin: 8px auto;
  }
`;

//Conteúdo
export const StyledConteudo = styled.main`
  width: 90vw;
  height: 70vh;
  margin: 1rem auto;
  background-color: aliceblue;
  padding: 1rem;
  box-shadow: darkblue 0 0 1px inset;

  h2,
  p {
    padding: 0.2rem 0;
  }

  div {
    @media (min-width: 650px) {
      display: flex;
      justify-content: space-around;
      align-items: center;
      gap: 20px;
    }
  }
`;

//Artigo
export const StyledArtigo = styled.article`
  background-color: lightgray;
  padding: 1rem;
  margin-top: 0.5rem;
  margin-bottom: 0.5rem;

  h3 {
    color: orange;
    border-bottom: solid 2px orange;
  }

  p {
    font-size: 1.1rem;
  }
`;

//Rodapé
export const StyledRodape = styled.footer`
  background: linear-gradient(
    90deg,
    rgba(0, 0, 0, 1) 0%,
    rgba(102, 102, 102, 1) 50%,
    rgba(0, 0, 0, 1) 100%
  );
  height: 30vh;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
`;
