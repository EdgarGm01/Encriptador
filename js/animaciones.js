const textoArea = document.querySelector(".textArea");               // extrallendo la informacion 
const mensajes = document.querySelector(".mensaje");                // Digiriendo la informacion 
    /*-- Convertir las vocales de e => enter, i => imes, a=>ai, o => ober, u=>ufat  --*/
function btnEncrip(){
    const txtEncrip = encriptador(textoArea.value)                   // Tomamos la funcion encriptador
    mensajes.value = txtEncrip                                      // Dicimos a mensajes que vale lo que tiene txtEncrip
    mostar();
    textoArea.value = "";                                           // limpiamos campo de .textArea
    mensajes.getElementsByClassName.backgroundImage = "none ";      // Quitamos imagen para poder ver mejor el resultado 
    
}
function btnDese(){
    const txtEncrip = desencriptar(textoArea.value)
    mensajes.value = txtEncrip
    mostar();
    textoArea.value = "";
    mensajes.getElementsByClassName.backgroundImage = "none ";
}

function encriptador(encrip){
    let conversion = [["e", "enter"],["i", "imes"],["a","ai"],["o","ober"],["u","ufat"]];
    encrip = encrip.toLowerCase()                                   // Por si el usuario tiene entradas de MAYUSCULAS o trasforma en minuscula
    for(let i=0; i<conversion.length;i++){                          // Lectura de los caracteres 1 a 1 para poder localzar las letras deceadas
        if(encrip.includes(conversion[i][0])){                      // Buscamos si tiene considencia con el arreglo
            encrip = encrip.replaceAll(conversion[i][0], conversion[i][1]); // cambiando los valore con los areglos 
        }
        // replace() nos cambia el valor que le mensionemos, pero si le colocamos el ALL cambia todos los valores que localice dentro de la cadena de caracteres
    }
    return encrip // Retornamos el valor de encrip
}
function desencriptar(des){
    let conversion = [["e", "enter"],["i", "imes"],["a","ai"],["o","ober"],["u","ufat"]];
    des = des.toLowerCase()
    for(let i=0; i<conversion.length; i++){
        if(des.includes(conversion[i][1])){
            des = des.replaceAll(conversion[i][1], conversion[i][0]);
        }
    }
    return des
}
function copiar(){
    var conteido = document.querySelector('.mensaje');
    conteido.select();
    document.execCommand('copy');
    alert('Texto copiado');
    document.querySelector('.mensaje').value = "";
    ocultar();
    
}
function mostar(){
    document.querySelector('.mensaje').style.display = 'block';
    document.querySelector('.nohay_per').style.display = 'none';
    document.querySelector('.nohay_text').style.display = 'none';
    document.querySelector('.copiar').style.display = 'block';
}
function ocultar(){
    document.querySelector('.mensaje').style.display = 'none';
    document.querySelector('.nohay_per').style.display = 'block';
    document.querySelector('.nohay_text').style.display = 'block';
    document.querySelector('.copiar').style.display = 'none';
}
/** _ ------------------ Selector DARK ------------------ _ */
const btnSwitch = document.querySelector('#switch');

btnSwitch.addEventListener('click', ()=>{
    document.body.classList.toggle('dark');
    btnSwitch.classList.toggle('active');
    // Guardar el modo en localstorage
    if(document.body.classList.contains('dark')){
            localStorage.setItem('dark-mode', 'true');
        }else{
            localStorage.setItem('dark-mode', 'false');
        }
});

// obtenemos el modo actual
if(localStorage.getItem('dark-mode') === 'true'){
    document.body.classList.add('dark');
    btnSwitch.classList.toggle('active');
}else{
    document.body.classList.remove('dark');
    btnSwitch.classList.remove('active');
}

/** ------------------  No permitimos la entrada de texto  ----------------------- */
const noingreso = document.querySelector('.mensaje');
noingreso.addEventListener("keypress", (e) =>{
    const expre = /[]/;
    if(!expre.test(e.key)) e.preventDefault();  
})


/**_    Cantidad de caracteres en el textarea   _ */
const $ = (clases) => document.querySelector(clases);
const ch = $('.ch')
const wd = $('.wd')

ch.innerHTML = 0
wd.innerHTML = 0

textoArea.addEventListener('input', (e) =>{
    ch.innerHTML = e.target.value.length
    const numberOfWords = e.target.value.split(' ').filter(item => item !='').length
    wd.innerHTML = numberOfWords
    document.querySelector('.box').style.display = 'flex';
})
/**---------------  Solo abecedario minuscula y numeros --------------------**/
textoArea.addEventListener("keypress", (e) =>{
    const expre = /[a-z, 0-9]/;
    if(!expre.test(e.key)) e.preventDefault();  
})
/** -------------------------  Dando intrucciones de remplazos posibles  ----------------------------- **/
document.querySelector('[name="Encri"]').addEventListener('click', function(){
    let remplazo = document.querySelector('[name="Encri"]')
});
function darFormato(cadana){
    /** _ Mayuscula_ **/
    let aMayu = cadena.replace(/[ÀÁÂÃÄÅÆ]/g,'a');
    let cMayu = cadena.replace(/[Ç]/g,'c');
    let eMayu = cadena.replace(/[ÈÉÊË]/g,'e');
    let iMayu = cadena.replace(/[ÌÍÏÏ]/g,'i');
    let dMayu = cadena.replace(/[Ð]/g,'d');
    let oMayu = cadena.replace(/[ÒÓÔÕÖðø]/g,'o');
    let uMayu = cadena.replace(/[ÙÚÛÜ]/g,'u');
    let yMayu = cadena.replace(/[Ý]/g,'y');
    /** _ minusculas **/
    let amin = cadena.replace(/[ÀÁÂÃÄÅÆ]/g,'a');
    let cmin = cadena.replace(/[Ç]/g,'c');
    let emin = cadena.replace(/[ÈÉÊË]/g,'e');
    let imin = cadena.replace(/[ÌÍÏÏ]/g,'i');
    let dmin = cadena.replace(/[Ð]/g,'d');
    let omin = cadena.replace(/[ÒÓÔÕÖðø]/g,'o');
    let umin = cadena.replace(/[ÙÚÛÜ]/g,'u');
    let ymin = cadena.replace(/[Ý]/g,'y');

}


