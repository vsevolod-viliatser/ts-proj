import React, { useState } from 'react';

interface TodoItemProps {
  text: string;
  onChange: (newText: string) => void;
  onDelete: () => void;
}

const TodoItem: React.FC<TodoItemProps> = ({ text, onChange, onDelete }) => {
  const [editMode, setEditMode] = useState(false);
  const [newText, setNewText] = useState(text);

  const handleEdit = () => {
    setEditMode(true);
  };

  const handleSave = () => {
    onChange(newText);
    setEditMode(false);
  };

  return (
    <div>
      {editMode ? (
        <>
          <input
            type="text"
            value={newText}
            onChange={(e) => setNewText(e.target.value)}
          />
          <button onClick={handleSave}>Сохранить</button>
        </>
      ) : (
        <>
          <span>{text}</span>
          <button onClick={handleEdit}>Редактировать</button>
          <button onClick={onDelete}>Удалить</button>
        </>
      )}
    </div>
  );
};

export default TodoItem;
