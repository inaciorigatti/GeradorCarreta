function gerarTexto() {
    const getVal = id => document.getElementById(id).value.trim();
    const getChecked = id => document.getElementById(id).checked;
  
    const titulo = getVal("titulo");
    const descricao = getVal("descricao");
    const marcaModelo = getVal("marcaModelo");
    const ano = getVal("ano");
    const tipo = getVal("tipo");
    const cor = getVal("cor");
    const eixos = getVal("eixos");
    const suspensao = getVal("suspensao");
    const freios = getVal("freios");
    const capacidade = getVal("capacidade");
    const dimensoes = getVal("dimensoes");
    const condicao = getVal("condicao");
    const documentacao = getVal("documentacao");
    const valor = getVal("valor");
    const contato = getVal("contato");
  
    const avista = getChecked("avista") ? "✅ Aceita proposta à vista" : "";
    const troca = getChecked("troca") ? "✅ Estuda troca por carreta tanque ou baú refrigerado" : "";
    const financiamento = getChecked("financiamento") ? "✅ Possibilidade de financiamento via banco parceiro" : "";
  
    let anuncio = "";
  
    if (titulo) anuncio += `🚛 ${titulo}\n\n`;
    if (descricao) anuncio += `${descricao}\n\n`;
  
    let especificacoes = "";
    if (marcaModelo) especificacoes += `Marca/Modelo: ${marcaModelo}\n`;
    if (ano) especificacoes += `Ano de Fabricação: ${ano}\n`;
    if (tipo) especificacoes += `Tipo: ${tipo}\n`;
    if (cor) especificacoes += `Cor: ${cor}\n`;
    if (eixos) especificacoes += `Número de Eixos: ${eixos}\n`;
    if (suspensao) especificacoes += `Tipo de Suspensão: ${suspensao}\n`;
    if (freios) especificacoes += `Freios: ${freios}\n`;
    if (capacidade) especificacoes += `Capacidade de Carga: ${capacidade}\n`;
    if (dimensoes) especificacoes += `Dimensões: ${dimensoes}\n`;
    if (especificacoes) anuncio += `🔧 Especificações Técnicas:\n${especificacoes}\n`;
  
    if (condicao) anuncio += `🛠 Condições Gerais:\n${condicao}\n\n`;
    if (documentacao) anuncio += `📄 Documentação:\n${documentacao}\n\n`;
    if (valor) anuncio += `💰 Valor: ${valor}\n`;
  
    if (avista || troca || financiamento) {
      anuncio += `\n💡 Condições de Pagamento:\n`;
      if (avista) anuncio += `${avista}\n`;
      if (troca) anuncio += `${troca}\n`;
      if (financiamento) anuncio += `${financiamento}\n`;
    }
  
    if (contato) anuncio += `\n📞 Entre em contato:\n${contato}`;
  
    const outputDiv = document.getElementById("output");
    outputDiv.innerHTML = `<textarea rows=\"20\" cols=\"60\">${anuncio}</textarea>`;
  
    navigator.clipboard.writeText(anuncio)
      .then(() => alert("Texto copiado para a área de transferência!"))
      .catch(() => alert("Não foi possível copiar o texto."));
  }
  
  // Máscara para campo de valor em R$
  document.addEventListener("DOMContentLoaded", () => {
    const valorInput = document.getElementById("valor");
  
    valorInput.addEventListener("input", () => {
      let valor = valorInput.value.replace(/\D/g, "");
      valor = (parseInt(valor, 10) / 100).toFixed(2) + "";
      valor = valor.replace(".", ",");
      valor = "R$ " + valor.replace(/\B(?=(\d{3})+(?!\d))/g, ".");
      valorInput.value = valor;
    });
  });
  