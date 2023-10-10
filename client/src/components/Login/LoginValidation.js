
/* LoginValidation.js */

function Validation(values) {
    const error = {}
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/ 
    const passwordPattern = /^[a-zA-Z0-9!@#$%^&*()_+{}[\]:;<>,.?~\\-]{6,}$/
    /* Este patrón permite contraseñas que contengan letras (mayúsculas y minúsculas), números y una serie de caracteres especiales comunes, como "!@#$%^&*()_+{}[]:;<>,.?~\-". Además, exige una longitud mínima de 6 caracteres. */
  
    if(values.email === ""){
      error.email = "Email should not be empty"
    }
    else if(!emailPattern.test(values.email)){
      error.email = "email didn't match"
    }else{
      error.email = ""
    }
  
    if(values.password === ""){
      error.password = "Password should not be empty"
    }
    else if(!passwordPattern.test(values.password)){
      error.password = "Password didn't match"
    } else{
      error.password = ""
    }
  
    if(error.email === "" && error.password === ""){
      error.cuenta = "Validando ..."
      console.log("Inicio de sesion Correcta");
    }else{
      error.cuenta = "Error"
      console.log("Inicio de sesion Inorrecta");
    }
  
    console.log("Errores de validación:", error);
  
    return error;
  }
  
  export default Validation;
  