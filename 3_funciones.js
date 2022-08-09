// Declarativas

function miFuncion() {
    return 3;
}

miFuncion();


// Expresión

var miFuncion = function() {
    return a + b;
}

miFuncion();


function sumar(a,b) {
    var resultado = a + b;
    return resultado;
}
sumar(2,8); // resultado = 10

function sumar(a,b) {
    return a + b;
}
sumar(2,8);  // resultado = 10


function saludarEstudiantes(estudiante){
    console.log(estudiante);
}
saludarEstudiantes('Gastón');
// se espera "Gastón"

function saludarEstudiantes(estudiante){
    console.log(`Hola ${estudiante}`); // alt + 96 O altgr + } = `` 
}
saludarEstudiantes('Gastón');
// se espera un mje "Hola Gastón"