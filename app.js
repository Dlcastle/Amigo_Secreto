// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let nombre = "";
let listaNombres = [];

function agregarAmigo(){
    nombre = document.getElementById("amigo").value;
    if (nombre === "") {
        alert("Por favor inserte un nombre");
    }

    else {
        listaNombres.push(nombre);
        mostrarNuevoNombre();
        document.getElementById("amigo").value = "";
    }
}

function mostrarNuevoNombre() {
    let lista = document.getElementById("listaAmigos");
    lista.innerHTML = "";
    for (let i = 0; i < listaNombres.length; i++) {
        let item = document.createElement("li");
        item.textContent = listaNombres[i];
        lista.appendChild(item);  
    }      
}

function sortearAmigo(){
    if (listaNombres.length < 2) {
        alert("Agrega al menos dos amigos para sortear");
    } else {
        let indice = Math.floor(Math.random()*listaNombres.length);
        let seleccionado = listaNombres[indice];
        document.getElementById("resultado").innerHTML = `Tu amigo secreto es: ${seleccionado}`;
    }
}