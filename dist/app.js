"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const operaciones_1 = require("./operaciones");
const figuras = {
    circulo: {
        radio: 10
    },
    triangulo: {
        base: 65,
        altura: 50
    },
    cuadrado: {
        lado: 80
    }
};
console.log((0, operaciones_1.areaPerimetroCuatrdo)(figuras.cuadrado.lado));
console.log((0, operaciones_1.areaPerimetroCirculo)(figuras.circulo.radio));
console.log((0, operaciones_1.areaPerimetroTriangulo)(figuras.triangulo.base, figuras.triangulo.altura));
//# sourceMappingURL=app.js.map