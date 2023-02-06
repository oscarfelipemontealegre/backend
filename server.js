import express from 'express';
import producto from './index.js'; 


const app = express();
app.use(express.json())
app.use(express.urlencoded({extended:true}));


app.get('/users',async(req,res)=>{
    const products = await producto.getProducts();
    res.json({products})
})
app.get('/producto/:id',async(req,res)=>{
    const product=await producto.getProduct(req.params.id);
    res.json({product})
})

app.post('/producto',async(req,res)=>{
    const newProduct=await producto.addProduct(req.body);
    res.json({newProduct})
})

app.put('/producto/:id',async(req,res)=>{
    const editProduct=await producto.editProduct(req.params.id,req.body);
    res.json({editProduct})
})

app.delete('/producto/:id',async(req,res)=>{
    const deleteProduct=await producto.deleteProduct(req.params.id);
    res.json({deleteProduct})
})



app.listen(4040,()=>{
    console.log('servidor escuchando al  puerto 4040')
})