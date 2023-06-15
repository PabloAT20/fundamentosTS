// un type tien la misma funcion que una interface solo que 
// si necesitas crear un tipo de dato que sea una unión o 
// intersección de otros tipos o necesitas utilizar la 
// palabra clave typeof, entonces type es la opción adecuada. 
// Si deseas crear una estructura que se extienda a partir de otras interfaces 
// o si estás trabajando con objetos y clases, entonces interface es más adecuada.


type PerimetroArea ={
    area: number;
    perimetro: number;
}


export const areaPerimetroCuatrdo = ( lado: number): PerimetroArea => {
    let area = lado * lado;
    let perimetro = lado * 4;
    return { area, perimetro };
}
/// triangulo
export const areaPerimetroTriangulo = (base: number, altura: number): PerimetroArea => ({area: (base*altura)/2, perimetro: base*3})

//// circulo
export const areaPerimetroCirculo = (radio: number): PerimetroArea => ({area: Math.PI*Math.pow(radio, 2), perimetro: Math.PI*(radio*2) })



