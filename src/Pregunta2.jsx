export const TaskList = ({id,text,completed}) => {
  return (
    <div className="propstareas">
      <div>
        <h2>{id}</h2>
        <p>{text}</p>
        <p className={`${completed==="completado" ?"complete" : "incomplete"}`}>{completed}</p>
      </div>
    </div>
  );
};
