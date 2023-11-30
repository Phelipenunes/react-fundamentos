import Artigo from "./Artigo";
import "./index.css";
function Conteudo() {
  return (
    <>
      <main>
        <section>
          <h2>Conteúdo de aplicação</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sunt vitae
            iusto qui perferendis sed repellendus odio recusandae quidem
            perspiciatis natus! Placeat corporis debitis, ut earum odit
            praesentium quas nemo saepe. Accusantium quaerat laboriosam porro
            dolores ipsam nesciunt eaque repudiandae soluta doloribus sint
            perferendis eius ducimus, delectus corporis voluptates itaque
            doloremque recusandae repellendus esse. Earum, natus alias.
            Doloremque itaque incidunt rem.
          </p>
          <Artigo />
          <Artigo />
          <Artigo />
        </section>
      </main>
    </>
  );
}

export default Conteudo;
