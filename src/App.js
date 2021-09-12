import React, { useState } from 'react';
import Routes from './rotas/routes';
import './index.css';
import MyContext from './contexts/contexts';



function App() {

  const [name, setName] = useState('');
  const [curso, setCurso] = useState('');


  return (
    <MyContext.Provider value={{ name, setName, curso, setCurso }}>
      <Routes />

    </MyContext.Provider>
  );
}

export default App;
