import React, { useState } from 'react';
import TodoList from './components/ToDoList';

const App: React.FC = () => {
  const [todoItems, setTodoItems] = useState<string[]>(['Task 1', 'Task 2', 'Task 3']);
  const [newItemText, setNewItemText] = useState('');

  const handleAddItem = () => {
    if (newItemText.trim() !== '') {
      setTodoItems([...todoItems, newItemText]);
      setNewItemText('');
    }
  };

  const handleChangeItem = (index: number, newText: string) => {
    const updatedItems = [...todoItems];
    updatedItems[index] = newText;
    setTodoItems(updatedItems);
  };

  const handleDeleteItem = (index: number) => {
    const updatedItems = [...todoItems];
    updatedItems.splice(index, 1);
    setTodoItems(updatedItems);
  };

  return (
    <div>
      <h1>Todo List</h1>
      <TodoList
        items={todoItems}
        onChangeItem={handleChangeItem}
        onDeleteItem={handleDeleteItem}
      />
      <div>
        <input
          type="text"
          value={newItemText}
          onChange={(e) => setNewItemText(e.target.value)}
        />
        <button onClick={handleAddItem}>Добавить</button>
      </div>
    </div>
  );
};

export default App;
