'use strict'

    let nodoTablaMultiplica= document.querySelector("#tabla_multiplica");


let str_TodasTablas = "";

for(let n = 0; n <= 10; n++){

    str_TodasTablas = str_TodasTablas + getTablaMultiplicar(n);

}



function getTablaMultiplicar (numeroTabla){
    let numTabla = numeroTabla;
    let strHtml = `
        <div class="tabla" >
            <h2> Tabla del ${ numTabla }  </h2>
            <div>
        `;
    
    for(let i = 0; i <= 10; i++){// Dentro de cada tabla


        strHtml = strHtml + 
        `<div> 
            ${ numTabla } x ${ i } = ${ i * numTabla } 
            </div>`;
        
        }

    strHtml = strHtml + `
        </div>
    </div>
    `
    return strHtml;
}

nodoTablaMultiplica.innerHTML = str_TodasTablas;