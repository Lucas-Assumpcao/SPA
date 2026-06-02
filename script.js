const pai = document.getElementById('eventos-pai');

pai.addEventListener('click', (e) => {
    e.preventDefault();
    const id = e.target.id;
    if (id === 'velocidade') {
        calculoVelocidade();
    } else if (id === 'massa') {
        calculoMassa();
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

function calculoMassa() {
    const main = document.querySelector('main');
    if (!main) return;

    main.innerHTML = `
        <h2>Calculadora de Massa</h2>
        <div class="calc-massa">
            <label for="input-massa">Valor em kg:</label>
            <input id="input-massa" type="number" step="any" />
            <div class="botoes-massa">
                <button id="converter-kg-lbs">Converter kg para lbs</button>
            </div>
            <p id="resultado-massa"></p>
        </div>
    `;

    const btnKgToLbs = document.getElementById('converter-kg-lbs');
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
}
