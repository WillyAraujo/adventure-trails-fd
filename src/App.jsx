import CardTrilha from "./components/CardTrilha"

function App() {

  const listaTrilhas = [
    {
      nomeTrilha: "Trilha da Costa da Lagoa",
      cidade: "Florianópolis",
      estado: "SC",
      duracao: 120,
      trajeto: 4,
      dificuldade: "Iniciante",
      tipo: "Caminhada /Trekking",
      nomeUsuario: "Lucas",
      urlImagem: "../src/assets/imagem-trilha-exemplo.jpg"
    }
  ]

  return (
    <>
    {
      listaTrilhas.map((trilha, index) => (
        <CardTrilha dadosTrilha={trilha} key={index} />
      ))
    }        
    </>
  )
}

export default App