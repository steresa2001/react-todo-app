import { v4 as uuidv4 } from "uuid";
const Input = ({ defaultText, inputText, setInputText, task, setTask }) => {
  const inputTextEventHandler = (e) => {
    setInputText(e.target.value);
  };
  const renderTask = () => {
    setTask([
      ...task,
      { text: inputText, complete: false, deleted: false, id: uuidv4() },
    ]);
    setInputText("");
  };
  const renderTaskOnEnter = (e) => {
    if (e.code !== "Enter") return;
    if (inputText !== "") {
      renderTask();
    }
  };

  const addTaskBtnEventHandler = () => {
    if (inputText === "") return;
    renderTask();
  };
  return (
    <div>
      <label htmlFor="js-task-input" className="sr-only">
        Enter task
      </label>
      <i
        id="js-add-task-btn"
        className="fas fa-plus-square task-icon"
        onClick={addTaskBtnEventHandler}
      ></i>
      <input
        onChange={inputTextEventHandler}
        onKeyDown={renderTaskOnEnter}
        type="text"
        id="js-task-input"
        className="task-input"
        value={inputText}
        placeholder={defaultText}
      />
    </div>
  );
};
export default Input;
