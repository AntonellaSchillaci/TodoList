import { Provider } from 'react-redux';
import { store } from './app/store';
import { TodoList } from './features/todos/TodoList';
import './styles/main.scss';

function App() {
  return (
    <Provider store={store}>
      <div className="todo-app">
        <h1>La mia To-Do List</h1>
        <TodoList />
      </div>
    </Provider>
  );
}

export default App;
