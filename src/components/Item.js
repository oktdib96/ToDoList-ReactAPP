import FlipMove from "react-flip-move";

const Item = (props) => {
  const Task = props.tasks.map((task) => (
    <li key={task.id} id={task.id} onClick={() => props.remove(task.id)}>
      <p>
        {task.text} <span>zrobić do: {task.date}</span>
      </p>
    </li>
  ));
  return (
    <FlipMove duration={250} easing="ease-out">
      {Task}
    </FlipMove>
  );
};

export default Item;
