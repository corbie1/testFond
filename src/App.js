import React from 'react';
import './App.scss';


export const App = ({ children }) => {
  return (
    <div className="app block">
      <main className="app__inner block__inner">{children}</main>
    </div>
  );
}

export default App;
