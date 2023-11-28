// function Escolher(idioma) {
//     fetch(`textos_${idioma}.json`)
//         .then(resposta => resposta.json())
//         .then(texto => {
//             document.getElementByClassName('valortotal').innerHTML = texto.valortotal;
//             document.getElementsByClassName('limparcarrinhoo').innerHTML = texto.limparcarrinhoo;
//             document.getElementByClassName('sairr').innerHTML = texto.sairr;
//         })
//         .catch(error => console.error('Erro buscando textos:', error));
// }