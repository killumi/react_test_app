import React, { useState, useRef, useEffect } from 'react';

const App = () => {
  const [items, setItems] = useState(Array.from({ length: 100 }, (_, index) => `Item ${index}`));
  const [inputValue, setInputValue] = useState('');
  const inputRef = useRef(null);
  const listEndRef = useRef(null);

  const handleAddItem = () => {
    if (inputValue.trim()) {
      setItems([...items, inputValue]);
      setInputValue('');
    }
    inputRef.current.blur(); // Снять фокус с текстового поля
  };

  useEffect(() => {
    listEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [items]);

  useEffect(() => {
    listEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, []);

  const handleInputFocus = () => {
    window.scrollTo(0, document.body.scrollHeight);
  };

  return (
    <div className='app-container'>
      <header className='app-header'>
        <h1>Test</h1>
      </header>
      <div className='items-list'>
        {items.map((item, index) => (
          <div key={index} className='item'>
            Value: {item}
          </div>
        ))}
        <div ref={listEndRef} />
      </div>
      <footer className='app-footer'>
        <input
          ref={inputRef}
          type='text'
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          onFocus={handleInputFocus}
        />
        <button onClick={handleAddItem}>Send</button>
      </footer>
    </div>
  );
};

export default App;
