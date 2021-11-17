const Prazo = (props) => {
  let hoje = new Date().toISOString().slice(0, 10);
  let prazo = props.prazo;

  let diasDiferentes = Math.floor(
    (Date.parse(prazo) - Date.parse(hoje)) / 86400000
  );

  if (diasDiferentes < 0) {
    return "Prazo perdido";
  } else {
    return `${diasDiferentes} dias`;
  }
};

export default Prazo;
