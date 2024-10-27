import React from 'react';
import TodoItem from '../TodoItem/TodoItem';
import { Todo } from '../../types';

interface TodoListProps {
  todos: Todo[];
  toggleTodo: (id: number) => void;
}


const TodoList: React.FC<TodoListProps> = ({ todos, toggleTodo }) => (
  <ul>
    {todos.map(todo => (
      <TodoItem key={todo.id} todo={todo} toggleTodo={toggleTodo} />
    ))}
  </ul>
);

export default TodoList;
