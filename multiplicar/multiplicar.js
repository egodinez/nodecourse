// Requireds
const fs = require('fs');


let listarTabla = (base, limite = 10) => {
    return new Promise((resolve, reject) => {
        if (!Number(base)) {
            reject(`El valor base ${ base } no es un numero`);
            return;
        }

        if (!Number(limite)) {
            reject(`El valor limite ${ limite } no es un numero`);
            return;
        }

        let data = '';
        for (let i = 1; i <= limite; i++) {
            data += `${ base } * ${ i } = ${ base * i }\n`;
        }

        resolve(data);
    });
};


let crearArchivo = (base, limite = 10) => {

    return new Promise((resolve, reject) => {
        let data = '';

        if (!Number(base)) {
            reject(`El valor ${ base } no es un numero`);
            return;
        }

        for (let i = 1; i <= limite; i++) {
            let res = base * i;
            data += `${ base } * ${ i } = ${ res }\n`;
        }


        fs.writeFile(`tablas/tabla-${ base }.txt`, data, (err) => {
            if (err)
                reject(err);
            else
                resolve(`tabla-${ base }.txt`);
        });
    });

};

/*
let crearArchivo = async(base) => {

    let data = '';

    if (!Number(base)) {
        throw new Error(`El valor ${ base } no es un numero`);
    }

    for (let i = 1; i <= 10; i++) {
        data += `${ base } * ${ i } = ${ base * i }\n`;
    }

    fs.writeFile(`tablas/tabla-${ base }.txt`, data, (err) => {
        if (err)
            throw new Error(err);
        else
            return `tabla-${ base }.txt`;
    });


};
*/

module.exports = {
    crearArchivo,
    listarTabla
};