import { areaPerimetroCirculo, areaPerimetroCuatrdo, areaPerimetroTriangulo } from './operaciones';


const figuras = {
    circulo: {
        radio:10
    },
    triangulo: {
        base: 65,
        altura: 50
    },
    cuadrado: {
        lado: 80
    }
}

console.log (areaPerimetroCuatrdo(figuras.cuadrado.lado))

console. log (areaPerimetroCirculo(figuras.circulo.radio))

console.log (areaPerimetroTriangulo(figuras.triangulo.base, figuras.triangulo.altura))