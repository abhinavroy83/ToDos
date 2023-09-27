import { createContext, useContext } from 'react';

export const Todocontext = createContext({
  todos: [{ id: 1, todo: 'todo', completed: false }],
  addTodo: (todo) => {},
  updatetodo:(id,todo)=>{},
  deletetodo:(id)=>{},
  togglecomplete:(id)=>{},
});

export const useTodo = () => {
  return useContext(Todocontext);
};

export const Todoprovider = Todocontext.Provider;
