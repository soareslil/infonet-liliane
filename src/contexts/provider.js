import React, { useState } from 'react';
import MyContext from './contexts';

function Provider({ children }) {
  const [name, setName] = useState('initialStateA');
  const [curso, setCurso] = useState('initialStateB');
  const contextValue = {
    curso,
    setCurso,
    name,
    setName,
  };

  return (
    <MyContext.Provider value={contextValue}>
      {children}
    </MyContext.Provider>
  );
}

export default Provider;