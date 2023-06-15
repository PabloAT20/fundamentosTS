"use strict";
// un type tien la misma funcion que una interface solo que 
// si necesitas crear un tipo de dato que sea una unión o 
// intersección de otros tipos o necesitas utilizar la 
// palabra clave typeof, entonces type es la opción adecuada. 
// Si deseas crear una estructura que se extienda a partir de otras interfaces 
// o si estás trabajando con objetos y clases, entonces interface es más adecuada.
Object.defineProperty(exports, "__esModule", { value: true });
exports.areaPerimetroCirculo = exports.areaPerimetroTriangulo = exports.areaPerimetroCuatrdo = void 0;
const areaPerimetroCuatrdo = (lado) => {
    let area = lado * lado;
    let perimetro = lado * 4;
    return { area, perimetro };
};
exports.areaPerimetroCuatrdo = areaPerimetroCuatrdo;
/// triangulo
const areaPerimetroTriangulo = (base, altura) => ({ area: (base * altura) / 2, perimetro: base * 3 });
exports.areaPerimetroTriangulo = areaPerimetroTriangulo;
//// circulo
const areaPerimetroCirculo = (radio) => ({ area: Math.PI * Math.pow(radio, 2), perimetro: Math.PI * (radio * 2) });
exports.areaPerimetroCirculo = areaPerimetroCirculo;
//# sourceMappingURL=operaciones.js.map