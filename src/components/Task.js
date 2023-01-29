import { faCheck, faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Task = (props) => {
  return (
    <div className="task">
      <p style={{ textDecoration: props.complete ? "line-through" : "" }}>
        {props.name}
      </p>
      <div className="actions">
        <FontAwesomeIcon
          onClick={() => props.isComplete(props.id)}
          className="check"
          icon={faCheck}
        />
        <FontAwesomeIcon
          onClick={() => props.deleteTask(props.id)}
          className="trash"
          icon={faTrash}
        />
      </div>
    </div>
  );
};

export default Task;
