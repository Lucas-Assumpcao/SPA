const pai = document.getElementById('eventos-pai');
const botaoConverter = document.getElementById('converter-btn');


pai.addEventListener('click', (e) => {
    e.preventDefault();
    console.log(e.target.id);
});

//formula conversor de velocidade km/h para milhas por hora (mph):

function kmhParaMph(kmh) {
    const mph = kmh / 1.609;
    return mph;
}

const velocidadeKmh = 100;
const velocidadeMph = kmhParaMph(velocidadeKmh);
console.log(`${velocidadeKmh} km/h é igual a ${velocidadeMph.toFixed(2)} mph.`);

//quando apertar o botão, a função kmhParaMph é chamada, convertendo a velocidade de km/h para mph e exibindo o resultado no console.

botaoConverter.addEventListener('click', () => {
    const inputKmh = document.getElementById('input-kmh');
    const kmhValue = parseFloat(inputKmh.value);
    
    if (!isNaN(kmhValue)) {
        const mphValue = kmhParaMph(kmhValue);
        console.log(`${kmhValue} km/h é igual a ${mphValue.toFixed(2)} mph.`);
    } else {
        console.log('Por favor, insira um valor numérico válido para km/h.');
    }
});