const mostrarTexto = () => {
    const numeroDigitado = document.getElementById("numero-digitado").value;

    document.getElementById("numero-cartao").innerHTML = numeroDigitado; // MOSRAR NUMERO DO CARTAO

    const nomeCliente = document.getElementById("nome-cartao").value;

    document.getElementById("nome-cliente").innerHTML = nomeCliente;

    const vencimentoMes = document.getElementById("mes").value;

    document.getElementById("vencimento-mes").innerHTML =  vencimentoMes

    const vencimentoAno = document.getElementById("ano").value;

    document.getElementById("vencimento-ano").innerHTML =  vencimentoAno


};

document.getElementById("form").addEventListener("input", mostrarTexto);

document.addEventListener("DOMContentLoaded", () => {
  const selectAno = document.getElementById("ano");
  const anoAtual = new Date().getFullYear()
  const anoFinal = 2050; // Obtém o ano atual

  // Preenche o select com opções de ano
  for (let ano = anoAtual; ano <= anoFinal; ano++) {
    const option = document.createElement("option");
    option.value = ano;
    option.textContent = ano;
    selectAno.appendChild(option);
  }
});

const mostrar = (elemento) => {
  elemento.style.display = 'block';
}
const ocultar = (elemento) => {
  elemento.style.display = 'none';
}
const showHide = (id) => {
  let div = document.getElementById(id);
  if( window.getComputedStyle(div).display !== 'none' ){
    ocultar(div);
    return false;
  }

  mostrar(div);
}
