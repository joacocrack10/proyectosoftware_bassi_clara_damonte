function validar(){
    
    let clave=document.getElementById("clave").value;

    if(clave=="1234"){
        window.location.href="index.html";
} else {
    alert("usuario o clave invalidos");
}}