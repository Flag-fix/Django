// SEMPRE LEMBRAR DE TERMINAR QQ LINHA COM PONTO E VÍRGULA ;;;;;;

function gritar() {
    alert("AAAhhhhhhhhhhhhhhhhhhhhh");
}

function perguntar() {
    var nome;
    nome = prompt("QUal seu nome? ")
    alert(`Olá ${nome}`);
}

function mudar_texto() {
    var h5 = document.getElementsByTagName("h5")
        // leia do documento todos os elementos com a tag(piriri) porém assim vai pegar todos o h6 do html
    if (h5[0].innerText == "Geek University") {
        h1[0].innerText == "Evolua seu lado Geek";
    } else {
        h5[0].innerText = "Geek University"
    }

    // para resolver colocar para ele ler na lista na posição 0 [0] só mudar o primeiro elementos e não TODOS eles.
}