import fs from 'fs'

const datos = './datos.json';

export class ProductManager{
    constructor(datos){
        this.datos=datos
    }


    async getProduct (){
        try {
            if (existsSync(this.datos)) {
                const productos = await promises.readFile(this.datos,'utf8')
                const productosJS = JSON.parse(productos)
                return productosJS
            } else {
                return []
            }
        } catch (error) {
            console.log(error)
        }
    }
addProduct = async (productos)=>{
    try {
        const datoId = await this.getProduct();
        if (datoId.length ===0) {
            productos.id =1;
            datoId.push(productos);
            await promises.writeFile(datos,JSON.stringify(datoId,null,'\t'));

        }else{
            productos.id = datoId[datoId.length-1].id+1;
            datoId.push(productos);
            await promises.writeFile(datos,JSON.stringify(datoId,null,'\t'));

        }
    } catch (error) {
        console.log(error)
    }
}

deleteId = async(id)=>{
    try {
        const datoId = await this.getProduct();
        const productoId = datoId.filter(producto=>producto.id !==id);
        await promises.writeFile(datos,JSON.stringify(productoId,null,'\t'));
    } catch (error) {
        console.log('el id, ha sido eliminado')
    }
}

encontrarId = async(id)=>{
    try {
        const datoId = await this.getProduct();
        const productoId = datoId.filter(producto=>producto.id === id);
        await promises.writeFile(datos,JSON.stringify(productoId,null,'\t'));
    } catch (error) {
        console.log(error)
    }
}

actulizarId = async(id,productos)=>{
    try {
        const datoId = await this.getProduct();
        const productoId = datoId.filter(producto => producto.id !==id);
        productos.id=id;
        productoId.push(productos)
        await promises.writeFile(datos,JSON.stringify(productoId, null,'\t'));
    } catch (error) {
        console.log(error)
    }
}

}






const producto = new ProductManager()

export default producto;

    const producto1 = {
        "title":"productopp1",
        "description":"este es el producto 1",
        "price": 200,
        "thumbnail":"sin imagen",
        "code":"abc123",
        "stock":20
    }
    const producto2 = {
        "title":"productopp2",
        "description":"este es el producto 2",
        "price": 400,
        "thumbnail":"sin imagen",
        "code":"abc1234",
        "stock":15
    }

    const producto3 = {
        "title":"productopp3",
        "description":"este es el producto 3",
        "price": 150,
        "thumbnail":"sin imagen",
        "code":"abc12345",
        "stock":45
    }
    const producto4 = {
        "title":"productopp4",
        "description":"este es el producto 3",
        "price": 150,
        "thumbnail":"sin imagen",
        "code":"abc12345",
        "stock":45
    }



/*producto.deleteId(7)
/*producto.encontrarId(1)*/
/*producto.addProduct(producto3)
producto.addProduct(producto4)*/
/*producto.actulizarId(1,{price:150,stock:25})*/