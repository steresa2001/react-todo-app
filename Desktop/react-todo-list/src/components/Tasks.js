import Task from "./Task";
const Tasks = ({ filteredTask, task, setTask }) => {
  return (
    <ul>
      {filteredTask.map((item) => {
        return <Task task={task} setTask={setTask} item={item} key={item.id} />;
      })}
    </ul>
  );
};

export default Tasks;
