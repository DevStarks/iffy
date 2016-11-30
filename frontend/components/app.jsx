import React from 'react';

const App = ({ children }) => {
  return (
    <div>
      <Header />
      {children}
    </div>
  );
};

export default App;
