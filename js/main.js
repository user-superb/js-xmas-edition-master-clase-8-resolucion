
function validarNombre(nombre){
    if (nombre.length === 0){
        return 'El campo nombre se encuentra vacio'
    }
    if (nombre.length >= 50){ 
        return 'Este campo debe tener menos de 50 caracteres'
    }
    if (!/^[a-z]+$/i.test(nombre)){
        return 'Solo se aceptan letras'
    }

    return '';
};

function validarCiudad(ciudad){
    if (ciudad == ''){
        return 'No se selecciono ninguna ciudad'
    };

    return '';
};

function validarComportamiento(comportamiento){
    if (comportamiento == ''){
        return 'No se selecciono ningun comportamiento'
    };

    return '';
};

function validarDescripcion(descripcion){
    if (descripcion.length == 0){
        return 'La descripcion del regalo se encuentra vacia'
    };
    if (descripcion.length >= 100){
        return 'La descripcion del regalo supera el limite de caracteres'
    };
    if (!/^[a-z 0-9]+$/i.test(descripcion)){
        return 'Solo se aceptan letras y numeros'
    }

    return '';
};

function validarFormulario(event)
{
    const $formulario = document.querySelector('[name=formulario]');

    const nombre = $formulario.nombre.value;
    const ciudad = $formulario.ciudad.value;
    const descripcion = $formulario['descripcion-regalo'].value;

    const errores = {
        nombre: validarNombre(nombre),
        ciudad: validarCiudad(ciudad),
        'descripcion-regalo': validarDescripcion(descripcion),
    };

    const tuvoExito = (manejarErrores(errores) === 0);

    if (tuvoExito === true){ 
        $formulario.classList.add('oculto');
        document.querySelector('#exito').classList.remove('oculto');
        window.setTimeout(() => {window.location.href = 'wishlist.html'}, 5000); // window.setTimeout agrega un temporizador, el primer parametro va a ser 
                                                                                // la funcion a realizar (en este caso utilice una arrow function porque queda re pro, segun Terry Davis soy un estupido)
                                                                                // y el segundo parametro toma el tiempo en milisegundos.
        
    }

    event.preventDefault();
};

// NOTA: objeto = {
//      key1: valor1,
//      key2: valor2,
//      key3: valor3
//  }

// A un objeto se puede acceder a sus propiedades con 'objeto.key' o 'objeto['key']'.

const $formulario = document.querySelector('[name=formulario]');
$formulario.onsubmit = validarFormulario;

function manejarErrores(errores){
    let cantidadErrores = 0;

    const keys = Object.keys(errores); // Convierte las llaves de 'errores' en un Array
    const $lista = document.querySelector('#errores');

    /*

    while ($lista.hasChildNodes()){ // Mientras $lista tenga nodos hijos entonces
        $lista.removeChild($lista.firstChild); // Eliminar el primer nodo
    };

    */

    // Alternativa: 

    document.querySelectorAll('.errorMessage').forEach((element) => {element.remove()}); // Busca todos los nodos de clase '.errorMessage' y por cada uno los remueve

    keys.forEach(key => {
        if (errores[key] !== ""){
            $formulario[key].classList.add("error"); // Añade la clase "error" a los campos erroneos, el index.css se encargara de darles un borde rojo

            cantidadErrores++;

            // Crear elemento (List Item) que muestre cual es el error
            const $errorMessage = document.createElement('li');
            $errorMessage.textContent = errores[key];
            $errorMessage.classList.add('errorMessage');

            $lista.appendChild($errorMessage); // Agregar elemento a la lista            

        } else {
            $formulario[key].classList.remove("error"); // Si no habia nada entonces no borra nada
        }
    });

    return cantidadErrores;
}
