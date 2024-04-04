import pgService from "../services/pg.service.js"

export const getProductoModel=async ()=>{
    const pg = new pgService ();
    return await pg.connection.query(
        `SELECT * FROM PRODUCTO`
    )
}

export const getProductoUnicoModel =async (id)=>{
    try {
        const pg = new pgService ();
        return await pg.connection.oneOrNone(
            `SELECT * FROM PRODUCTO WHERE ID_PRODUCTO = $1`, [id]
        )
    } catch (error) {
        return error
    }
    
}

export const UpdateProductoModel =async (detalle,nombre,valor,id)=>{
    try {
        const pg = new pgService ();
        return await pg.connection.oneOrNone(
            `UPDATE producto SET DETALLE=$1, NOMBRE=$2,  VALOR=$3 WHERE ID_PRODUCTO = $4 RETURNING *`, [detalle,nombre,valor,id]
        )
    } catch (error) {
        return error
    }
    
}

export const PostProductoModel = async (detalle,nombre,valor)=>{
    try {
        const pg = new pgService ();
        return await pg.connection.query(
            `INSERT INTO PRODUCTO (DETALLE, NOMBRE, VALOR) VALUES ($1,$2,$3) RETURNING *`, [detalle,nombre,valor]
        )
       
    } catch (error) {
        return error
    }

}