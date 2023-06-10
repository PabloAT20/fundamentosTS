import { Canciones, Usuario } from "./interfaces/interface";

  
const canciones: Canciones= {
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

canciones.estatus = true;



const usuario: Usuario = {};
//agregar propiedades al objeto
usuario.name = 'pablo';
usuario.apellido = 'Tellez';
usuario.email = 'pablotellez5@gmail.com';

//recorrer las propiedades del obejeto 
Object.keys(canciones).forEach( (key) => {
  console.log(canciones[key]);
})


console.log(usuario)