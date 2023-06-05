import React from "react";

function useLocalStorage(itenName, initialValue) {
  const [item, setItem] = React.useState(initialValue);
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState(false);
  
  
  React.useEffect(() => {
    setTimeout(() => {
      try {
        const localStorageItem = localStorage.getItem(itenName);
  
        let parsedItem;
  
        if (!localStorageItem) {
          localStorage.setItem(itenName, JSON.stringify(initialValue));
          parsedItem = initialValue;
        } else {
          parsedItem = JSON.parse(localStorageItem);
          setItem(parsedItem);
        }
  
        setLoading(false);
      } catch (error) {
        setLoading(false);
        setError(true);
      }
    }, 2000);
  }, [itenName, initialValue]);

  const saveItem = (newItem) => {
    localStorage.setItem(itenName, JSON.stringify(newItem));
    setItem(newItem);
  };

  return {
    item, 
    saveItem, 
    loading, 
    error
  };
}

export {useLocalStorage};

// const defaultTodos = [
//   {text: 'Cortar cebolla', completed: true},
//   {text: 'Tomar el Curso de React.js', completed: false},
//   {text: 'Llorar con la Llorona', completed: false},
//   {text: 'Llorar a la lloreria', completed: true},
//   {text: 'LALALAL', completed: false},
//   {text: 'Cortar cebolla2', completed: false},
//   {text: 'Tomar el Curso de React.js2', completed: false},
//   {text: 'Llorar con la Llorona2', completed: true},
//   {text: 'Llorar a la lloreria2', completed: false},
//   {text: 'LALALAL2', completed: true},
//   {text: 'LALALAL23', completed: true},
// ];

// localStorage.setItem('TODOS_V1', JSON.stringify(defaultTodos));
