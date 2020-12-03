var nome = "Rafael da Silva Marta";
var cargo = "Developer";

var nomeHtml = document.getElementById("nome-no-html");
var cargoHtml = document.getElementById("cargo-no-html");
var texto1 = document.getElementById("texto-1");
var texto2 = document.getElementById("texto-2");

function colocarNomeNoHtml(nome){
    nomeHtml.innerHTML = nome;
}

function colocarCargoNoHtml(cargo){
    cargoHtml.innerHTML = cargo;
}

function logarNome(){
    console.log(nome);
}

function clickNoProjetos(){
    console.log("Clicou no botão projetos");
    texto1.style.display = "none";
    texto2.style.display = "block";
}

function clickNoSobre(){
    console.log("Clicou no botão sobre.")
    texto1.style.display = "block";
    texto2.style.display = "none";

}

colocarNomeNoHtml(nome);
colocarCargoNoHtml(cargo);