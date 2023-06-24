import React from 'react';
import TodoItem from './ToDoItem';

interface TodoListProps {
  items: string[];
  onChangeItem: (index: number, newText: string) => void;
  onDeleteItem: (index: number) => void;
}

const TodoList: React.FC<TodoListProps> = ({ items, onChangeItem, onDeleteItem }) => {
  return (
    <div>
      {items.map((item, index) => (
        <TodoItem
          key={index}
          text={item}
          onChange={(newText) => onChangeItem(index, newText)}
          onDelete={() => onDeleteItem(index)}
        />
      ))}
    </div>
  );
};

export default TodoList;
