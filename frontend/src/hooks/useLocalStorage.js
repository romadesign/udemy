import { useRouter } from 'next/router'
import { useState, useEffect } from 'react'
export const useLocalStorage = ({} = {}) => {
  const [value, setValue] = useState();
  const getValue = (key, defaultValue) => {
    try {
      const item = window.localStorage.getItem(key)
      return item ? JSON.parse(item) : defaultValue
    } catch (error) {
      console.error(error)
      return defaultValue
    }
  
  }


  const saveValue = (key, newValue) => {
    try {
      const serializedValue = JSON.stringify(newValue);
      window.localStorage.setItem(key, serializedValue);
      setValue(newValue);
    } catch (error) {
      console.error(error);
    }
  };
  return {
    getValue,
    saveValue
  }
}


// import { useState } from 'react';

// const useLocalStorage = (key, initialValue = null) => {
//   const [value, setValue] = useState(() => {
//     try {
//       const item = window.localStorage.getItem(key);
//       return item ? JSON.parse(item) : initialValue;
//     } catch (error) {
//       console.error(error);
//       return initialValue;
//     }
//   });

//   const saveValue = (newValue) => {
//     try {
//       const serializedValue = JSON.stringify(newValue);
//       window.localStorage.setItem(key, serializedValue);
//       setValue(newValue);
//     } catch (error) {
//       console.error(error);
//     }
//   };

//   return { value, saveValue };
// };

// export default useLocalStorage;