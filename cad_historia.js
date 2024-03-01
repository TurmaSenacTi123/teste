const firebaseConfig = {
    apiKey: "AIzaSyCydzm596p8_yNOjinJIBPr0CAvTFZ4Nm4",
    authDomain: "projeto-historia-c48e6.firebaseapp.com",
    databaseURL: "https://projeto-historia-c48e6-default-rtdb.firebaseio.com",
    projectId: "projeto-historia-c48e6",
    storageBucket: "projeto-historia-c48e6.appspot.com",
    messagingSenderId: "1045336762278",
    appId: "1:1045336762278:web:d87c056ffcaaa8d5abd167"
  };

firebase.initializeApp(firebaseConfig);

const database = firebase.database();

document.getElementById('cadastrar').addEventListener('click', function cadastrar() {
    var turma = document.getElementById("turma").value;
    var titulo = document.getElementById("titulo").value;
    var historia = document.getElementById("historia").value;
    if(document.getElementById("turma").value == "" || document.getElementById("titulo").value == "" ||  document.getElementById("historia").value == ""){
        mostrarMensagem_2("Algum campo não foi preenchido!")}
    else{

            database.ref('historias').push({
            turma: turma,
            titulo: titulo,
            historia: historia
        });

        document.getElementById("turma").value = "";
        document.getElementById("titulo").value = "";
        document.getElementById("historia").value = "";

        mostrarMensagem("História cadastrada com sucesso!");
    }
});

function mostrarMensagem(mensagem) {
    var mensagemContainer = document.createElement("div");
    mensagemContainer.className = "mensagem-container";
    mensagemContainer.innerHTML = "<p>" + mensagem + "</p>";
    
    document.body.appendChild(mensagemContainer);

    setTimeout(function() {
        mensagemContainer.remove();
    }, 3000);
}

function mostrarMensagem_2(mensagem) {
    var mensagemContainer = document.createElement("div");
    mensagemContainer.className = "mensagem-container";
    mensagemContainer.innerHTML = "<p>" + mensagem + "</p>";
    
    document.body.appendChild(mensagemContainer);

    setTimeout(function() {
        mensagemContainer.remove();
    }, 3000);
}

function contarCaracteres() { // Hideki
    var texto = document.getElementById("historia").value;
    var contador = document.getElementById("contador");
    var numCaracteres = texto.length;
    contador.innerHTML = numCaracteres + "/" + 3000 + " Caracteres";
}// Hideki


function custommostrarMensagem() {
    var mostrarMensagemContainer = document.createElement("div");
    mostrarMensagemContainer.className = "custom-mostrarMensagem";
    mostrarMensagemContainer.innerHTML = "<p>Esta é uma mensagem personalizada.</p>";
    
    document.body.appendChild(mostrarMensagemContainer);

    setTimeout(function() {
        mostrarMensagemContainer.remove();
    }, 3000);
}


