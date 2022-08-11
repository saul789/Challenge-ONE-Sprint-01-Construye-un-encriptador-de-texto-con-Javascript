function encriptador(){
    let mensajeEncriptado="";
    let mensaje=document.getElementById("input-entrada").value;
    for(let i=0;i<mensaje.length;i++){
        let nuevaletra= changeword(mensaje[i]);
        mensajeEncriptado=mensajeEncriptado+nuevaletra;
        
    }
    
    mostrarResultado(mensajeEncriptado);
}
function changeword(letra){
    let letraEncriptada="";
    switch(letra){
        case 'a':
            letraEncriptada="ai";
            break;
        case 'e':
            letraEncriptada="enter";
            break;
        case 'i':
            letraEncriptada="imes";
            break;
        case 'o':
            letraEncriptada="ober";
            break;
        case 'u':
            letraEncriptada="ufat";
            break;
        default:
            letraEncriptada=letra;
            break;
        

    }
    return letraEncriptada;
}
function desencriptador(){
    let mensajeEncriptado=document.getElementById("input-entrada").value;
    let mensajeDesencriptado=mensajeEncriptado.replace(/enter/gi, "e").replace(/imes/gi, "i").replace(/ai/gi, "a").replace(/ober/gi, "o").replace(/ufat/gi, "u");
    mostrarResultado(mensajeDesencriptado);

 

}
function mostrarResultado(resultado){
    quitarTextoResultado();
    let mensaje=document.getElementById('mensajeRemover');
    const label=document.createElement("label");
    label.textContent=resultado;
    label.className="txt-resultado";
    label.id="copiar";
    const botonCopiar=document.createElement("button");
    const labelBotonCopiar=document.createElement("label");
    labelBotonCopiar.textContent="Copiar";
    labelBotonCopiar.className="txt-btn-copiar";
    botonCopiar.appendChild(labelBotonCopiar);
    botonCopiar.className="btn-copiar";
    botonCopiar.addEventListener("click",copiar);
    mensaje.appendChild(label);
    mensaje.appendChild(botonCopiar);
    
}
function quitarTextoResultado(){
    let mensaje=document.getElementById('mensajeRemover');
    mensaje.innerHTML="";
}
function copiar(){
    let copyText = document.getElementById("copiar");
    navigator.clipboard.writeText(copyText.textContent).then(()=>{alert("copiado con exito!!!")}).catch(()=>{alert("error al copiar")});
 
}
