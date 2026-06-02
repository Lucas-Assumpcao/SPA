const pai = document.getElementById('eventos-pai');

pai.addEventListener('click', (e) => {
    const link = e.target.closest('a');
    if (!link || !pai.contains(link)) return;
    e.preventDefault();
    const id = link.id;
    if (id === 'imc') {
        calculoImc();
    } else if (id === 'velocidade') {
        calculoVelocidade();
    } else if (id === 'massa') {
        calculoMassa();
    } else if (id === 'tres') {
        calculoTres();
    } else {
        clearMain();
    }
});

// conversor de velocidade km/h para milhas por hora (mph)
function kmhParaMph(kmh) {
    return kmh / 1.609;
}

function kgParaLbs(kg) {
    return kg * 2.20462;
}

function lbsParaKg(lbs) {
    return lbs / 2.20462;
}

function mphParaKmh(mph) {
    return mph * 1.609;
}

function clearMain() {
    const main = document.querySelector('main');
    if (main) main.innerHTML = '<h2>Painel de Ferramentas</h2>';
}

function calculoVelocidade() {
    const main = document.querySelector('main');
    if (!main) return;

    main.innerHTML = `
        <h2>Calculadora de Velocidade</h2>
        <div class="calc-vel">
            <label for="input-vel">Valor de velocidade:</label>
            <input id="input-vel" type="number" step="any" />
            <div class="botoes-velocidade">
                <button id="converter-kmh-mph">Converter km/h para mph</button>
                <button id="converter-mph-kmh">Converter mph para km/h</button>
            </div>
            <p id="resultado-velocidade"></p>
        </div>
    `;

    const btnKmhToMph = document.getElementById('converter-kmh-mph');
    const btnMphToKmh = document.getElementById('converter-mph-kmh');
    const resultadoEl = document.getElementById('resultado-velocidade');

    if (btnKmhToMph) {
        btnKmhToMph.addEventListener('click', () => {
            const inputVel = document.getElementById('input-vel');
            const kmhValue = parseFloat(inputVel.value);

            if (!isNaN(kmhValue)) {
                const mphValue = kmhParaMph(kmhValue);
                resultadoEl.textContent = `${kmhValue} km/h é igual a ${mphValue.toFixed(2)} mph.`;
            } else {
                resultadoEl.textContent = 'Por favor, insira um valor numérico válido.';
            }
        });
    }

    if (btnMphToKmh) {
        btnMphToKmh.addEventListener('click', () => {
            const inputVel = document.getElementById('input-vel');
            const mphValue = parseFloat(inputVel.value);

            if (!isNaN(mphValue)) {
                const kmhValue = mphParaKmh(mphValue);
                resultadoEl.textContent = `${mphValue} mph é igual a ${kmhValue.toFixed(2)} km/h.`;
            } else {
                resultadoEl.textContent = 'Por favor, insira um valor numérico válido.';
            }
        });
    }
}

function calcularCategoriaImc(imc) {
    if (imc < 18.5) return 'Abaixo do peso';
    if (imc < 25) return 'Peso normal';
    if (imc < 30) return 'Sobrepeso';
    return 'Obesidade';
}

function calculoImc() {
    const main = document.querySelector('main');
    if (!main) return;

    main.innerHTML = `
        <h2>Calculadora de IMC</h2>
        <div class="calc-imc">
            <label for="input-peso">Peso (kg):</label>
            <input id="input-peso" type="number" step="any" />
            <label for="input-altura">Altura (m):</label>
            <input id="input-altura" type="number" step="any" />
            <div class="botoes-imc">
                <button id="calcular-imc-masculino">Calcular IMC Masculino</button>
                <button id="calcular-imc-feminino">Calcular IMC Feminino</button>
            </div>
            <p id="resultado-imc"></p>
        </div>
    `;

    const btnMasculino = document.getElementById('calcular-imc-masculino');
    const btnFeminino = document.getElementById('calcular-imc-feminino');
    const resultadoEl = document.getElementById('resultado-imc');

    function calcularImcComGenero(genero) {
        const inputPeso = document.getElementById('input-peso');
        const inputAltura = document.getElementById('input-altura');
        const peso = parseFloat(inputPeso.value.replace(',', '.'));
        let altura = parseFloat(inputAltura.value.replace(',', '.'));

        if (isNaN(peso) || isNaN(altura) || peso <= 0 || altura <= 0) {
            resultadoEl.textContent = 'Por favor, insira peso e altura válidos.';
            return;
        }

        if (altura > 3) {
            altura = altura / 100;
        }

        const imc = peso / (altura * altura);
        const categoria = calcularCategoriaImc(imc);
        resultadoEl.textContent = `${genero}: IMC = ${imc.toFixed(2)} — ${categoria}.`;
    }

    if (btnMasculino) {
        btnMasculino.addEventListener('click', () => calcularImcComGenero('Masculino'));
    }

    if (btnFeminino) {
        btnFeminino.addEventListener('click', () => calcularImcComGenero('Feminino'));
    }
}

function calculoMassa() {
    const main = document.querySelector('main');
    if (!main) return;

    main.innerHTML = `
        <h2>Calculadora de Massa</h2>
        <div class="calc-massa">
            <label for="input-massa">Valor em kg ou lbs:</label>
            <input id="input-massa" type="number" step="any" />
            <div class="botoes-massa">
                <button id="converter-kg-lbs">Converter kg para lbs</button>
                <button id="converter-lbs-kg">Converter lbs para kg</button>
            </div>
            <p id="resultado-massa"></p>
        </div>
    `;

    const btnKgToLbs = document.getElementById('converter-kg-lbs');
    const btnLbsToKg = document.getElementById('converter-lbs-kg');
    const resultadoEl = document.getElementById('resultado-massa');

    if (btnKgToLbs) {
        btnKgToLbs.addEventListener('click', () => {
            const inputMassa = document.getElementById('input-massa');
            const kgValue = parseFloat(inputMassa.value);

            if (!isNaN(kgValue)) {
                const lbsValue = kgParaLbs(kgValue);
                resultadoEl.textContent = `${kgValue} kg é igual a ${lbsValue.toFixed(2)} lbs.`;
            } else {
                resultadoEl.textContent = 'Por favor, insira um valor numérico válido.';
            }
        });
    }

    if (btnLbsToKg) {
        btnLbsToKg.addEventListener('click', () => {
            const inputMassa = document.getElementById('input-massa');
            const lbsValue = parseFloat(inputMassa.value);

            if (!isNaN(lbsValue)) {
                const kgValue = lbsParaKg(lbsValue);
                resultadoEl.textContent = `${lbsValue} lbs é igual a ${kgValue.toFixed(2)} kg.`;
            } else {
                resultadoEl.textContent = 'Por favor, insira um valor numérico válido.';
            }
        });
    }
}

function calculoTres() {
    const main = document.querySelector('main');
    if (!main) return;

    main.innerHTML = `
        <h2>Regra de Três</h2>
        <div class="calc-tres">
            <label for="input-a">Valor A:</label>
            <input id="input-a" type="number" step="any" />
            <label for="input-b">Valor B:</label>
            <input id="input-b" type="number" step="any" />
            <label for="input-c">Valor C:</label>
            <input id="input-c" type="number" step="any" />
            <button id="calcular-tres">Calcular x</button>
            <p id="resultado-tres"></p>
        </div>
    `;

    const btnCalcularTres = document.getElementById('calcular-tres');
    const resultadoEl = document.getElementById('resultado-tres');

    if (btnCalcularTres) {
        btnCalcularTres.addEventListener('click', () => {
            const inputA = document.getElementById('input-a');
            const inputB = document.getElementById('input-b');
            const inputC = document.getElementById('input-c');

            const valorA = parseFloat(inputA.value);
            const valorB = parseFloat(inputB.value);
            const valorC = parseFloat(inputC.value);

            if (isNaN(valorA) || isNaN(valorB) || isNaN(valorC)) {
                resultadoEl.textContent = 'Por favor, insira valores numéricos válidos em todos os campos.';
                return;
            }

            if (valorA === 0 || valorB === 0 || valorC === 0) {
                resultadoEl.textContent = 'Erro: nenhum valor pode ser zero. Ajuste os valores e tente novamente.';
                return;
            }

            const resultadoX = (valorB * valorC) / valorA;
            resultadoEl.textContent = `x = ${resultadoX.toFixed(2)} (a partir de A/B = C/x).`;
        });
    }
}
