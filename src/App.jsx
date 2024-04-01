import CardTrilha from "./components/CardTrilha"
import "./App.css"

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
    <div className="container">
    <h1 className="titulo">Explore trilhas incríveis</h1>
    {
      listaTrilhas.map((trilha, index) => (
        <CardTrilha dadosTrilha={trilha} key={index} />
      ))
    }        
    </div>
  )
}

export default App