import logo from './logo.svg';
import Header from './components/header'
import ListComponent from './components/list_component';
import './App.css';
import ComponentTodoList from './components/todolist/todoComponent';
import TodoListUnc from './components/todoList2(uncontrolled)/todoList2';
import TodoListself from './components/Todo_practice/todoListSelf';

function App() {

  return (
    <div>
    <TodoListUnc/>
    </div>
  )
}

export default App