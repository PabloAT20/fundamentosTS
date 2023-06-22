class cafeteria {
    bebidas: string[];
    alimentos: string[];
    // idPedido: number;
    cliente: string[];

    constructor (){
       this.bebidas = ['coca', 'agua de limon', 'manzanita'];
       this.alimentos = ['sándwich','ensalada','hot cakes', 'salchgipapas'];
    //    this.idPedido = idPedido;
       this.cliente = [];
    }

    EnseñaMenu(){
    //bebidas
    console.log('--- Menú ---\n');
    console.log('Bebidas:');
    this.bebidas.forEach((bebidas, index) => {
    // return `${index}: ${bebida}`;
    console.log(`${index}: ${bebidas}`);
    });
    //comida/alimentos
    console.log('Alimentos:');
    this.alimentos.forEach((alimento, index) => {
    //   return `${index}: ${alimento}`;
    console.log(`${index}: ${alimento}`);
    });
    }

    // cancelarPedido(idPedido:number) {
    //     console.log(`Pedido ${idPedido} cancelado.`);
    //   }

}

const menuu =  new cafeteria();
menuu.EnseñaMenu();