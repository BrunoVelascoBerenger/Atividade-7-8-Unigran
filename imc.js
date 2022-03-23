const form = document.getElementById('form');

form.addEventListener('submit', e => {
    e.preventDefault();

    let peso = parseInt(document.getElementById('peso').value);
    let altura = parseFloat(document.getElementById('altura').value);

    let IMC = peso / Math.pow(altura,2);

    let resultado = document.getElementById('resultado');
    resultado.innerHTML = IMC.toFixed(2);

})