import React from 'react';

const Index = ({ children }) => {
  return (
    <div className="container-fluid d-flex flex-column justify-content-between h-100">
      {children}
    </div>
  );
};

export default Index;
