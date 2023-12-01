import Menu from "./Menu.jsx";

import styled from "styled-components";

const Styledcabecalho = styled.header`
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

function Cabecalho() {
  return (
    <Styledcabecalho>
      <h1>Olá react! 👍</h1>
      <hr />
      <Menu />
    </Styledcabecalho>
  );
}

export default Cabecalho;
