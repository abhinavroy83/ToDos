import { useState } from 'react';
import { Todoprovider } from './Context/TodoContext';

function App() {
  const [todos, setTodo] = useState([]);
  const addtodo = todo => {
    setTodo(prev => [{ id: Date.now(), ...todo }, ...prev]);
  };

  const updatetodo = (id, todo) => {
    setTodo(prev =>
      prev.map(prevtodo => {
        prevtodo.id === id ? todo : prevtodo;
      })
    );
  };

  const deletetodo = id => {
    setTodo(prev => prev.filter(todo => todo.id !== id));
  };

  return (
    <Todoprovider
      value={(todos, addtodo, updatetodo, deletetodo, togglecomplete)}
    >
      <div className="bg-[#172842] min-h-screen py-8">
        <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
          <h1 className="text-2xl font-bold text-center mb-8 mt-2">
            Manage Your Todos
          </h1>
          <div className="mb-4">{/* Todo form goes here */}</div>
          <div className="flex flex-wrap gap-y-3">
            {/*Loop and Add TodoItem here */}
          </div>
        </div>
      </div>
    </Todoprovider>
  );
}

export default App;
