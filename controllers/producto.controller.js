import { getProductoModel, getProductoUnicoModel, PostProductoModel,UpdateProductoModel,DeleteProductoModel } from "../models/producto.model.js"

export const getProducto =async  (req,res)=>{
    let data =await  getProductoModel();
    res.status(200).json({msg:"esto es GET", data})
}

export const getProductoUnico=async(req,res)=>{
    const {id}=req.params;
    let data = await getProductoUnicoModel(id);
    res.status(200).json({msg:"esto es GET unico", data})
}

export const postProducto = async (req,res)=>{
    const {detalle,nombre,valor} = req.body;
    let data = await PostProductoModel(detalle,nombre,valor);
    res.status(200).json({msg:"esto es POST", data})
}

export const updateProducto = async (req,res)=>{
    const {id}=req.params;
    const {detalle,nombre,valor} = req.body;
    let data = await UpdateProductoModel(detalle,nombre,valor,id);
    res.status(200).json({msg:"esto es UPDATE", data})
}

export const deleteProducto = async (req, res)=>{
    const {id}=req.params;
    await DeleteProductoModel(id);
    res.status(200).json({msg:"esto es DELETE"})

}

export default {
    getProducto,
    getProductoUnico,
    postProducto,
    updateProducto,
    deleteProducto
}