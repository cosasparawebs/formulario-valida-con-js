function validar (){
    var nombre, apellido, correo, usuario, clave, telefono, expresion;
    nombre = document.getElementById('nombre').value;
    apellido =  document.getElementById('apellido').value;
    correo = document.getElementById('correo').value;
    usuario = document.getElementById('usuario').value;
    clave = document.getElementById('clave').value;
    telefono = document.getElementById('telefono').value;

    expresion = /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/;

    if(nombre === ""|| apellido === "" || correo === "" || usuario === "" || clave === "" || telefono === ""){
        alert('Completa los campos vacios');
        return false;
    } 
    else if(nombre.length > 30){
        alert('El nombre es muy largo');
        return false;
    }
    else if(apellido.length > 80){
        alert('El apellido es muy largo');
        return false;
    }
    else if(correo.length > 100){
        alert('El correo es muy largo');
        return false;
    }
    else if(!expresion.test(correo)){
        alert('El correo es invalido');
    }
    else if(apellido.length > 80){
        alert('El apellido es muy largo');
        return false;
    }
    else if(usuario.length > 20 || clave.length > 20){
        alert('El usuario y clave tienen maximo de 20 caracteres');
        return false;
    }
    else if(telefono.length > 10){
        alert('El telefono es muy largo');
        return false;
    }
    else if(isNaN(telefono)){
        alert('El telefono no es un numero');
        return false;
    }

}


