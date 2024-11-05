document.getElementById("compraForm").addEventListener("submit", (event) => {
  // Impede o envio padrão do formulário
  event.preventDefault();

  // Mostra o alerta de processamento com animação de loading
  Swal.fire({
    title: "Processando compra",
    text: "Aguarde um momento...",
    icon: "info",
    allowOutsideClick: false,
    allowEscapeKey: false,
    showConfirmButton: false,
    didOpen: () => {
      Swal.showLoading();

      // Simula um tempo de processamento
      setTimeout(() => {
        // Atualiza o alerta para mostrar a mensagem de sucesso
        Swal.fire({
          title: "Compra aprovada!",
          text: "O comprovante foi enviado para seu email.",
          icon: "success",
          confirmButtonText: "OK",
        });
      }, 3000); // 3 segundos de simulação de tempo de processamento
    },
  });
});
