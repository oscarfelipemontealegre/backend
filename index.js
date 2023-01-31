const fs = require ('fs');

const datos = './datos.json';

class ProductManager{
    async getProduct (){
        try {
            if (fs.existsSync(datos)) {
                const productos = await fs.promises.readFile(datos,'utf8')
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
            await fs.promises.writeFile(datos,JSON.stringify(datoId,null,'\t'));

        }else{
            productos.id = datoId[datoId.length-1].id+1;
            datoId.push(productos);
            await fs.promises.writeFile(datos,JSON.stringify(datoId,null,'\t'));

        }
    } catch (error) {
        console.log(error)
    }
}

getDelete = async id =>{
    const productos = await this.getProduct();
    try {
        const indexOfElement  = productos.findIndex(datos => datos.id != id);
        productos.slice(indexOfElement,1);
        await this.WriteFile(productos);
    } catch (error) {
        console.log(error)
    }
}

getFindId = async id => {
    const producto = await this.getProduct();
    try {
        const product = producto.find(id=>datos.id === id );
        return product ? product : null;
    } catch (error) {
        console.log(error)
    }
}

}






const producto = new ProductManager()
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

/*async function entrega (){
    const getProduct = await producto.getProduct()
    console.log (getProduct)

    /*await producto.addProduct(producto4)*/


/*entrega()*/

async function idproduct (){
    const getFindId = await producto.getFindId(2)
    console.log (getFindId)

    
}

idproduct(2)

console.log(idproduct);

/*async function deletepr (){
    const getDelete = await producto.getDelete(3)
    console.log (getDelete)

    
}


console.log(deletepr); */