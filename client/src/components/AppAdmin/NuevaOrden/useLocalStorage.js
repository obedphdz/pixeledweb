import { useState } from "react";

/* Funcion para almacenar objetos dentro del localStorage del navegador y para que después de actualizar pagina, 
persistan los datos en el form */
export function useLocalStorage(key, initialValue){
    const [storedValue, setStoredValue] = useState(() => {
        try{
            const item = window.localStorage.getItem(key)
            return item ? JSON.parse(item) : initialValue;
        }catch(error){
            return initialValue
        }
    })
    
    const setValue = value => {
        try{
            setStoredValue(value)
            window.localStorage.setItem(key, JSON.stringify(value))
        }catch(error){
            console.error(error)
        }
    }
    return [storedValue, setValue]
}