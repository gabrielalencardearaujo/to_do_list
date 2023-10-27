import React from 'react';

const TaksContext = React.createContext();

function TaskStorage({children}) {
  return (
    <TaksContext.Provider value={{ }}>
    {children}
    </TaksContext.Provider>
  )
}

export default TaskStorage