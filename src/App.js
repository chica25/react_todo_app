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
    </div>
  );
}

export default App;
