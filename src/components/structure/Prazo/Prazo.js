const Prazo = (props) => {
  let hoje = new Date().toISOString().slice(0, 10);
  let prazo = props.prazo;

  let diasDiferentes = Math.floor(
    (Date.parse(prazo) - Date.parse(hoje)) / 86400000
  );
  if (props.feito !== 2) {
    if (diasDiferentes <= 0) {
      return "Prazo perdido";
    } else if (diasDiferentes === 1) {
      return "Menos de 1 dia!";
    } else {
      return `${diasDiferentes} dias`;
    }
  }
  return `Tarefa concluída!`;
};

export default Prazo;
