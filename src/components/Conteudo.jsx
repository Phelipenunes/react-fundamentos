import { StyledConteudo } from "../Style.js";
import Artigo from "./Artigo";
import imagem1 from "../assets/abra-o-livro.png";
import imagem2 from "../assets/livro-magico.png";
import imagem3 from "../assets/pilha-de-livros.png";

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
            imagem={imagem1}
            icone="👍"
            titulos="Senhor dos Anéis"
            descricao="Livro criado por
            Tokien."
            datalancamento={data[0]}
          >
            <h4>Volumes</h4>
            <ul>
              <li>A sociedade do Anél</li>
              <li>As duas torres</li>
              <li>O retorno do Rei</li>
            </ul>
          </Artigo>

          <Artigo
            imagem={imagem2}
            icone="✌"
            titulos="Game Of Thrones"
            descricao="Aventura maluca com
            gente sempre morrendo."
            datalancamento={data[1]}
          >
            <h4>Defuntos do livro</h4>
            <ol>
              <li>Ed Stark</li>
              <li>Outra pessoa importante</li>
              <li>mais Outra pessoa importante</li>
            </ol>
          </Artigo>

          <Artigo
            imagem={imagem3}
            icone="🤞"
            titulos="HTML5 e CSS3"
            descricao="Fonte de estudos para
            quem quer começar no Front-End"
            datalancamento={data[2]}
          >
            <section>
              <h4>Assuntos</h4>
              <details>
                <summary>Estrutura</summary>
                <p>HTML5 para estruturas e etc...</p>
              </details>

              <details>
                <summary>Estilização</summary>
                <p>CSS3 para formatar e etc...</p>
              </details>
            </section>
          </Artigo>
        </div>
      </StyledConteudo>
    </>
  );
}

export default Conteudo;
