import { StyledConteudo } from "../Style.js";
import Artigo from "./Artigo";

const data = ["25/10/2001", "30/08/1992", "30/02/2024"];

function Conteudo() {
  return (
    <>
      <StyledConteudo>
        <h2>Conteúdo de aplicação</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sunt vitae
          iusto qui perferendis sed repellendus odio recusandae quidem
          perspiciatis natus! Placeat corporis debitis, ut earum odit
          praesentium quas nemo saepe. Accusantium quaerat laboriosam porro
          dolores ipsam nesciunt eaque repudiandae soluta doloribus sint
          perferendis eius ducimus, delectus corporis voluptates itaque
          doloremque recusandae repellendus esse. Earum, natus alias. Doloremque
          itaque incidunt rem.
        </p>
        <div>
          <Artigo
            icone="👍"
            titulos="Senhor dos Anéis"
            descricao="Livro criado por Tokien."
            datalancamento={data[0]}
          />
          <Artigo
            icone="✌"
            titulos="Game Of Thrones"
            descricao="Aventura maluca com gente sempre morrendo."
            datalancamento={data[1]}
          />
          <Artigo
            icone="🤞"
            titulos="HTML5 e CSS3"
            descricao="Fonte de estudos para quem quer começar no Front-End"
            datalancamento={data[2]}
          />
        </div>
      </StyledConteudo>
    </>
  );
}

export default Conteudo;
