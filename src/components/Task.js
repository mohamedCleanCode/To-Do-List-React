import { faCheck, faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Task = ({ name, deleteTask, id }) => {
  return (
    <div className="task">
      <p>{name}</p>
      <div className="actions">
        <FontAwesomeIcon className="check" icon={faCheck} />
        <FontAwesomeIcon
          //   onClick={deleteTask(id)}
          className="trash"
          icon={faTrash}
        />
      </div>
    </div>
  );
};

export default Task;
