import './App.css';

function App(props) {
  return (
    <div className="todo-app stack-lg">
      <h1>Todo App</h1>
      <form>
        <h2 className="label-wrapper">
          <label htmlFor="new-todo-input" className="label-lg">
            Daily Task
          </label>
        </h2>
          <input type="text" id="new-todo-input" className="input-lg" name="text" autoComplete="off" />
          <button type="submit" className="btn bnt-primary btn-lg"Add></button>
        </form>
        <div className="filters btn-group stack-exception">
          <button type="button" className="btn toggle-btn" aria-pressed="true">
            <span className="visually hidden">Show </span>
            <span>all</span>
            <span className="visually-hidden"> Tasks</span>
          </button>
          <button type="button" className="btn toggle-btn" aria-pressed="false">
            <span className="visually-hidden">Show </span>
            <span>Completed</span>
          </button>
        </div>
        <h2 id="list-heading">
          3 tasks remaining
        </h2>
        <ul role="list" className="todo-list stack-large stack-exception" aria-labelledby="list-heading">
        <li className="todo stack-small">
          <div clasName="c-cb">
            <input id="todo-0" type="checkbox" defaultChecked="{true} />
          </div>
        </li>

        </ul>
    </div>
  );
}

export default App;
