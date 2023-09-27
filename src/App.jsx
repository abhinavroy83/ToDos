import { useEffect, useState } from 'react';
import { Todoprovider } from './Context/TodoContext';
import TodoForms from './Components/Todoforms';
import Todolist from './Components/Todolist';

function App() {
  const [todos, setTodo] = useState([]);

  // const addTodo = (todo) => {
  //   setTodo(prev => [{ id: Date.now(), ...todo }, ...prev]);
  // };

  const addTodo = todo => {
    setTodo(prev => [{ id: Date.now(), ...todo }, ...prev]);
  };
  // addTodo

  const updatetodo = (id, todo) => {
    setTodo(prev =>
      prev.map(prevTodo => (prevTodo.id === id ? todo : prevTodo))
    );
  };
  const deletetodo = id => {
    setTodo(prev => prev.filter(todo => todo.id !== id));
  };

  const togglecomplete = id => {
    setTodo(prev =>
      prev.map(prevtodo =>
        prevtodo.id === id
          ? { ...prevtodo, completed: !prevtodo.completed }
          : prevtodo
      )
    );
  };

  useEffect(() => {
    const todos = JSON.parse(localStorage.getItem('todos'));
    if (todos && todos.length > 0) {
      setTodo(todos);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  });

  return (
    <Todoprovider
      value={{ todos, addTodo, updatetodo, deletetodo, togglecomplete }}
    >
      <div className="bg-[#172842] min-h-screen py-8">
        <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
          <h1 className="text-2xl font-bold text-center mb-8 mt-2">
            Manage Your Todos
          </h1>
          <div className="mb-4">
            {/* Todo form goes here */}
            <TodoForms />
          </div>
          <div className="flex flex-wrap gap-y-3">
            {/*Loop and Add TodoItem here */}
            {todos.map(todo => (
              <div key={todo.id} className="w-full">
                <Todolist todo={todo} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </Todoprovider>
  );
}

export default App;
