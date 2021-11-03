const Task = ({ task, item, setTask }) => {
  const completeButtonEventHandler = () => {
    setTask(
      task.map((el) => {
        if (el.id === item.id) {
          console.log(el.complete);
          return {
            ...el,
            complete: !el.complete,
          };
        }
        return el;
      })
    );
  };
  const deleteTaskAnimation = (e) => {
    e.target.parentElement.classList.add("task");
  };
  const deleteButtonEventHandler = (e) => {
    console.log(e.target);
    deleteTaskAnimation(e);
    setTimeout(() => {
      setTask(
        task.filter((el) => {
          return el.id !== item.id;
        })
      );
    }, 500);
  };
  return (
    <li className={`${item.complete ? "task-complete" : ""}`}>
      <span className="task-content">{item.text}</span>
      <button
        onClick={completeButtonEventHandler}
        className={`action-btn complete-btn fas fa-check-circle ${
          item.complete ? "complete" : ""
        }`}
      >
        <span className="sr-only">mark task as complete</span>
      </button>
      <button
        onClick={deleteButtonEventHandler}
        className="action-btn delete-btn fas fa-solid fa-trash"
      >
        <span className="sr-only">delete task</span>
      </button>
    </li>
  );
};

export default Task;
