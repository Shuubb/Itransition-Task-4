import { useState } from "react";

function useUniqueStringList(
   initialStrings: string[]
) {
   const [array, setArray] = useState<string[]>(initialStrings);

   const addString = (newString: string) => {
      if (newString && !array.includes(newString)) {
         setArray((prevArr) => [...prevArr, newString]);
      }
   };

   const removeString = (stringToRemove: string) => {
      setArray((prevArr) => {
         const updatedArray = prevArr.filter((str) => str !== stringToRemove);
         return updatedArray;
      });
   };

   const includes = (stringToSearch: string) => {
      return array.includes(stringToSearch);
   };

   const map = (func: (string: string, index: number) => void) => {
      return array.map(func);
   };

   const clear = () => {
      setArray([]);
   };

   return {
      array,
      addString,
      removeString,
      includes,
      map,
      clear,
   };
}

export default useUniqueStringList;
