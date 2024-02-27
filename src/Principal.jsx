import { ColorChanger } from "./pregunta1";
import { TaskList } from "./Pregunta2";
import { tareas } from "./tareas";

export const Principal = () => {
  return (
    <section>
      <div className="color">
        <h1>Color Changer</h1>
        <ColorChanger colorProps="red" />
        <ColorChanger colorProps="blue" />
        <ColorChanger colorProps="yellow" />
      </div>
      <hr />
      <div className="TaskList">
        <h1>TaskList</h1>
        <article className="container">
          <div className="contenedor-tareas">
            {tareas.map((tareas) => (
              <TaskList key={tareas.id}{...tareas} />
            ))}
          </div>
        </article>
      </div>
    </section>
  );
};
