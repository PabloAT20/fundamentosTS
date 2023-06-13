interface Alumno {
    nombre: string;
    carrera: string;
    parcial: string;
    calificaciones: number[];
    promedioMinimo: number;
}

const alumno: Alumno = {
    nombre:'Jesus',
    carrera:'Ing Sistemas',
    parcial:'Segundo',
    calificaciones: [78, 56, 43, 67, 70],
    promedioMinimo: 70
}

//crear una funcion que se encargue de calcular el promedio del alumno y retornara un mensaje (debe de recibir el objeto completo)
//mencionando el promedio actual y si esta aprobado o no en el parcial 
// Alumno: Jesus, Promedio: ??, Parcial: segundo, Carrera: ??, AProbado: ??

const Promedios = (alumno: Alumno): string =>{
// se utiliza para iterar sobre los elementos de un array y combinarlos en un solo valor. Permite ejecutar una función en cada elemento del array y acumular un resultado mientras se recorre el array.
    const promedio = alumno.calificaciones.reduce((a, b) => a + b, 0) / alumno.calificaciones.length;
    const aprobado = promedio >= alumno.promedioMinimo;
    
    const mensaje = `Alumno: ${alumno.nombre}, Promedio: ${promedio.toFixed(2)}, Parcial: ${alumno.parcial}, Carrera: ${alumno.carrera}, Aprobado: ${aprobado ? 'Sí' : 'No'}`;
    return mensaje;
}
      
let resultado = Promedios(alumno);
console.log(resultado);
