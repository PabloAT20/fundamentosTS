// // Declarar sus tipos
// const nombre: string = "John Doe";
// const edad: number = 25;
// console.log(`Hola, ${nombre}. Tienes ${edad} años.`);

// //arreglar el error
// const numero: number = -5;

// if (numero > 0) {
//   console.log("El número es positivo");
// } else if (numero === 0) {
//   console.log("El número es cero");
// } else {
//   console.log("El número es negativo");
// }
// const numeros:number[] = [1, 2, 3, 4, 5];

// for (let i = 0; i < numeros.length; i++) {
//   console.log(numeros[i]);
// }

interface videoJuego {
  nombreVideojuego: string
  restriccionEdad: string
  desarrolladora: string
  plataformas:  string[]
}



const videoJuego:videoJuego = {
  nombreVideojuego: 'Elden Ring',
  restriccionEdad: '+18',
  desarrolladora: 'From Software',
  plataformas: ['xbox', 'ps', 'pc'],
}

////////////////////////////////

interface pokemon {
  id: number
  nombre: string
  tipo: string[]
  evolucion:evolucion
  habilidades: string[]
  stats:stats
  legendario:boolean
}

interface evolucion {
  nivel: number
  nombre: string
  
}

interface stats {
  hp: number
  ataque: number
  defensa: number
  velocidad: number
}

const pokemon:pokemon = {
  id: 1,
  nombre: 'Bulbasaur',
  tipo: ['Planta', 'Veneno'],
  evolucion: {
    nivel: 16,
    nombre: 'Ivysaur'
  },
  habilidades: ['Espesura', 'Clorofila'],
  stats: {
    hp: 45,
    ataque: 49,
    defensa: 49,
    velocidad: 45
  },
  legendario: false
};

////////////////////////////////

interface cancion{
  titulo: string
  artista: string
  genero: string
  reproducciones: number
  popularidad: number
  album:album
  duracion:string
}

interface album{   
  nombre:string
  lanzamiento:number
  productor:productor
}

interface productor{
  nombre: string
  estudio: string
}


const cancion:cancion = {
  titulo: 'Bohemian Rhapsody',
  artista: 'Queen',
  album: {
    nombre: 'A Night at the Opera',
    lanzamiento: 1975,
    productor: {
      nombre: 'Roy Thomas Baker',
      estudio: 'EMI Studios, Trident Studios'
    }
  },
  duracion: '6:07',
  genero: 'Rock',
  reproducciones: 5000000,
  popularidad: 4.5
};

