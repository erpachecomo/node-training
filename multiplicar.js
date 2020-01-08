
const fs = require('fs');
const colors = require('colors')

let listarTabla = (base, limite = 10) =>{
  if(!Number(base)){
      console.log(`El valor '${ base }' no es un numero`)
      return;
    }
    console.log(`tabla de ${base}`.green);

    for(let i = 1; i<=limite;i++){
      console.log(`${base} * ${i} = ${base * i}`.blue);
    }
}

let crearArchivo = async (base, limite) => {
  return new Promise ((resolve, reject)=>{
    
    if(!Number(base)){
      reject(`El valor '${ base }' no es un numero`)
      return;
    }
    
    let data = '';
    for(let i = 1; i<=limite;i++){
      data += `${base} * ${i} = ${base * i}\n`;
    }
    
    fs.writeFile(`tabla-${base}.txt`,data, (err)=>{
      if (err) reject( err);
      else
        resolve(`tabla-${base}.txt`);
    });
  }) 
}

module.exports = {
  crearArchivo,
  listarTabla
}

