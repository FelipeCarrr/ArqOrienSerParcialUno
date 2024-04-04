import { checkSchema } from "express-validator";

export const postProductoValidator = checkSchema(
    {
        nombre:{
            errorMessage : "Nombre no valido",
            notEmpty: true,
            isLength: {
                errorMessage: "El tamaño debe ser minimo de 1 caracter",
                options: {
                    min: 1,
                    max: 100
                }
            },

        },
        detalle: {
            errorMessage: 'Detalle no valido',
            notEmpty: true,
            isLength:{
                options: { min: 5},
                errorMessage: 'El detalle debe ser minimo de 5 letras'
            }
    
        },
        valor: {
            matches : {options: /^[0-9]+$/},
            errorMessage: "valor no valido"
        },

    },["body"]
);