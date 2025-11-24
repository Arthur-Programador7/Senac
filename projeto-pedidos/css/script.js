const prato = document.getElementById('prato');
const bebida = document.getElementById('bebida');
const adicionais = document.querySelectorAll('.adicional');
const erro = document.getElementById('erro');
const resultado = document.getElementById('resultado');
const form = document.getElementById('form');
const formSection = document.getElementById('form-section');


function calcular() {
erro.textContent = '';


if (prato.value === '') {
erro.textContent = 'Selecione um prato!';
erro.classList.remove('hidden');
return;
}
if (bebida.value === '') {
erro.textContent = 'Selecione uma bebida!';
erro.classList.remove('hidden');
return;
}


let total = Number(prato.value) + Number(bebida.value);


let listaAdicionais = [];
adicionais.forEach(ad => {
if (ad.checked) {
total += Number(ad.value);
listaAdicionais.push(ad.parentElement.textContent.trim());
}
});


resultado.innerHTML = `
<h2>Resumo do Pedido</h2>
<p><strong>Prato:</strong> R$${prato.value}</p>
<p><strong>Bebida:</strong> R$${bebida.value}</p>
<p><strong>Adicionais:</strong> ${listaAdicionais.length > 0 ? listaAdicionais.join(', ') : 'Nenhum'}</p>
<p><strong>Total:</strong> R$${total.toFixed(2)}</p>
<button onclick="resetar()">Novo Pedido</button>
`;


resultado.classList.remove('hidden');
formSection.classList.add('hidden');
}


function resetar() {
prato.value = '';
bebida.value = '';
adicionais.forEach(a => a.checked = false);
resultado.classList.add('hidden');
formSection.classList.remove('hidden');
}


document.getElementById('calcular').addEventListener('click', calcular);