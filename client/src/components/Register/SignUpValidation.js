
/* SignUpValidation.js */

function Validation(values) {
  return new Promise((resolve) => {
    const error = {}
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/ 
    const passwordPattern = /^[a-zA-Z0-9!@#$%^&*()_+{}[\]:;<>,.?~\\-]{6,}$/
    
      if(values.nombre === ""){
        error.nombre = "Name should not be empty"
    }else{
        error.nombre = "correct"
    }

    if(values.ape_pat === ""){
      error.ape_pat = "Ape pat should not be empty"
    }else{
        error.ape_pat = "correct"
    }

    if(values.ape_mat === ""){
      error.ape_mat = "Ape mat should not be empty"
    }else{
        error.ape_mat = "correct"
    }

    if(values.num_telefono === ""){
      error.num_telefono = "PhoneNumber should not be empty"
    }else{
        error.num_telefono = "correct"
    }

    if(values.email === ""){
        error.email = "email should not be empty"
    }
    else if(!emailPattern.test(values.email)){
        error.email = "email didn't match"
    }else{
        error.email = "correct"
    }
  
    if(values.password === ""){
      error.password = "Password should not be empty"
    }
    else if(!passwordPattern.test(values.password)){
      error.password = "Error:Password. La contraseña debe cumplir con los requisitos mínimos: Al menos 6 caracteres de longitud. Letras mayúsculas y minúsculas e números al igual que caracteres especiales. "
    } else{
      error.password = "correct"
    }

    if (
      error.nombre === "correct" &&
      error.ape_pat === "correct" &&
      error.ape_mat === "correct" &&
      error.num_telefono === "correct" &&
      error.email === "correct" &&
      error.password === "correct"
  ) {
      error.cuentaRegi = "Correcto."
      console.log("Registro a clientes correcto.");
    }else{
      error.cuentaRegi = "Incorrecto"
      console.log("Registro a clientes incorrecto.");
    }
  
    console.log("Errores de validación:", error);
  
    resolve(error);
  });
}
  
  export default Validation;
  