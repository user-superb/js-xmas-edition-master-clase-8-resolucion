function pruebaValidarNombre(){
    console.assert(validarNombre('') == 'El campo nombre se encuentra vacio',
    'validarNombre no funciono con un string vacio'
    );

    console.assert(validarNombre('11111111111111111111111111111111111111111111111111') == 'Este campo debe tener menos de 50 caracteres',
    'validarNombre no funciono con un string que excede el limite de caracteres'
    );

    console.assert(validarNombre('Francisco') == '',
    'validarNombre fallo con un nombre valido'
    );

    console.assert(validarNombre('12345') == 'Solo se aceptan letras',
    'validarNombre no funciono con un nombre invalido'   
    )
}

pruebaValidarNombre();

function pruebaValidarCiudad(){
    console.assert(validarCiudad('') == 'No se selecciono ninguna ciudad',
    'validarCiudad no funciono con una opcion vacia'
    );

    console.assert(validarCiudad('Buenos Aires') == '',
    'validarCiudad no funciono con una ciudad valida'
    );
};

pruebaValidarCiudad();

function pruebaValidarDescripcion(){
    console.assert(validarDescripcion('') == 'La descripcion del regalo se encuentra vacia',
    'validarDescripcion no funciono con un string vacio'
    );

    console.assert(validarDescripcion('1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111') == 'La descripcion del regalo supera el limite de caracteres',
    'validarDescripcion no funciono con un string que excede el limite de caracteres'
    );

    console.assert(validarDescripcion('Quiero un peluche') == '',
    'validarDescripcion no funciono con una descripcion valida'
    );
};

pruebaValidarDescripcion();