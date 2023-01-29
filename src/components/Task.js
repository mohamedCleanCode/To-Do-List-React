import { faCheck, faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Task = ({ name }) => {
  return (
    <div className="task">
      <p>{name}</p>
      <div className="actions">
        <FontAwesomeIcon icon={faCheck} />
        <FontAwesomeIcon icon={faTrash} />
      </div>
    </div>
  );
};

export default Task;
