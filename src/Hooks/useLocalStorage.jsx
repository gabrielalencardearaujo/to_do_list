import React from 'react';

function useLocalStorage() {
  const [storage, setStorage] = React.useState({});
  const [data, setData] = React.useState([])

  React.useEffect(() => {
    const ls = localStorage.getItem('taks');

    if(!ls) {
      setLocalStorage([]);
      setData(JSON.parse(window.localStorage.getItem('tasks')));
    } else {
      setData(JSON.parse(ls));
    }
  }, [])

  React.useEffect(() => {
    const saveTask = setTimeout(() => {
      console.log(storage)

      if(data.length === 0 ) {
        data.push(storage);
      } else {
        data.forEach((value) => {
          if(storage.id === value.id) {
            value.title = storage.title;
            value.content = storage.content;
          }
        })
      }
      setLocalStorage(data)
      console.log(data)
      
    }, 2000)

    return () => {
      clearTimeout(saveTask);
    }
  }, [storage, data]);

  function setLocalStorage(value) {
    const json = JSON.stringify(value);
    localStorage.setItem('taks', json);
  }

  return{
    storage,
    setStorage,
    setLocalStorage,
  }
}

export default useLocalStorage;