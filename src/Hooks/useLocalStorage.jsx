import React from 'react';

export const newTask = (id, title = 'undefined', body = '') => {
  return {id: id,
  title: title,
  body: body,
  }
};

function useLocalStorage() {
  const [data, setData] = React.useState([]);

  React.useEffect(() => {
    const local = window.localStorage.getItem('tasks');

    if(local) setData(JSON.parse(local));
    else setData([]);

  }, [])

  React.useEffect(() => {
    setLocalStorage(data);
  }, [data])

  function setLocalStorage(value) {
    window.localStorage.setItem('tasks', JSON.stringify(value))
  }

  return{
    data,
    setData,
  }
}

export default useLocalStorage;