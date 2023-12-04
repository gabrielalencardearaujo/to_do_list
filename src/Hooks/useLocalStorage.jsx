import React from 'react';

export const newTask = (id, title = 'undefined', body = '') => {
  return {id: id,
  title: title,
  body: body,
  }
};

function getLocalStorage() {
  const local = window.localStorage.getItem('tasks');

    if(local) return(JSON.parse(local));
    else return([]);
}

function useLocalStorage() {
  const [data, setData] = React.useState(getLocalStorage());
  
  React.useEffect(() => {
    window.localStorage.setItem('tasks', JSON.stringify(data))
  }, [data])

  return{
    data,
    setData,
  }
}

export default useLocalStorage;