import { StyledConteudo } from "../Style.js";
import Artigo from "./Artigo";
import cursos from "../api/cursos.js";

const data = ["25/10/2001", "30/08/1992", "30/02/2024"];

function Conteudo() {
  const exemplo2 = () => {
    alert("Exemplo 2");
  };

  const exemplo3 = (valor) => {
    alert(valor);
  };

  return (
    <>
      <StyledConteudo>
        <h2>Conteúdo de aplicação</h2>

        <button onClick={exemplo2}>Exemplo 2</button>
        <br />
        <button
          onClick={() => {
            exemplo3("oi pai");
          }}
        >
          Exemplo 3
        </button>

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
        <div className="principal">
          {cursos.map((curso) => (
            <Artigo
              handleClick={() => {
                exemplo3(curso.categoria);
              }}
              key={curso.id}
              categoria={curso.categoria}
              titulo={curso.titulo}
              preco={curso.preco}
            />
          ))}
        </div>
      </StyledConteudo>
    </>
  );
}

export default Conteudo;
