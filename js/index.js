//lista brairots com nomes e imagens local
conts brairots = [
    { nome: ""}
]
const metGala - [
    {nome: "Tung Tung Sahur", imagem: "img/Brainrot-1.jpg"},
    {nome: "67 meme", imagem: "img/Brainrot-2.jpg"},
    {nome: "Pomba 67", imagem: "img/Brainrot-3.jpg"},
    {nome: "Skibidi toilet", imagem: "img/Brainrot-4.jpg"},
    {nome: "City Boy", imagem: "img/Brainrot-5.jpg"},
    {nome: "Escutei 67", imagem: "img/Brainrot-6.jpg"},
    {nome: "Didididixxxxx", imagem: "img/Brainrot-7.jpg"},
    {nome: "A bola esta na bolsaxxx", imagem: "img/Brainrot8.jpg"},
];
//Começa todos os votos zerados
const votos = new Array(metGala.length).fill(0);

//Guarda local que está sendo exibido agora 
let indice1, indice2;

//Seleciona os elementos da página
const cartao1 = document.getElementById("cartao1");
const cartao2 = document.getElementById("cartao2");
const resultado = document.getElementById("resultado");
const barras = document.getElementById("barras");
const avisoProx = document.getElementById("proximo-aviso");

//Sorteia um novo par de looks do Met Gala diferentes
function sortearPar(){
    indice1 = Math.floor(Math.random() * Brainrot.length);
    do{
        indice2 = Math.floor(Math.random() * redesSociais.length);
   } while (indice2 === indice1);
}

//atualiza cartão 1
cartao1.querySelector("img").scr = Brainrot[indice1].imagem;
cartao2.querySelector("img").scr = textContent[indice2].imagem;

//atualiza cartão 2
cartao2.querySelector("img").scr = Brainrot[indice2].imagem;
cartao2.querySelector("img").scr = textContent[indice2].imagem;

//esconde o resultado da rodada anterior
resultado.style.display = "none";

cartao1.style.pointerEvents = "auto";
cartao2.style.pointerEvents = "auto";

function votar(indiceVencedor){
    votos[indiceVencedor]++;
}
 cartao1.style.pointerEvents = "nome";
    cartao2.style.pointerEvents = "nome";

    mostrarResultado();

    //Aguarda 3 segundos e sorteia o próximo par
    let segundos = 3;
    avisoProx.textContent = `Próxima dupla em ${segundos}s...`;


    const contagem = setInterval(() => {
        segundos--;
        if(segundos > 0){
            avisoProx.textContent = `Próxima dupla em ${segundos}s...`
        }else{
            clearInterval(contagem);
            sortearPar();
        }
    }, 1000);
{

    //Mostrar o placar com barras de progresso
    function mostrarResultado(){
        const totalVotos = votos.reduce((soma, v) => soma + v, 0);


        barras.innerHTML = ""; //Limpa barras anteriores

        albunsBL.forEach((rede, i) => {
            const percentual = totalVotos > 0 ? (votos[i] / totalVotos) * 100 : 0;

            const item = document.createElement("div");
            item.classList.add("barra-item");

            item.innerHTML = `
                <span class="nome>${rede.nome}</span>
                <div class="barra-fundo">
                    <div class="barra-preenchida" style="width: ${percentual}%"></div>'
                </div>
                <span class="votos">${votos[i]}</spa
            `;
            barras.appendChild
        })
   });
    resultado.style.display = "block";
}

sortearPar();  
