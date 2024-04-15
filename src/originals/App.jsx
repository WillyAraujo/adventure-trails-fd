import CardTrilha from "./components/CardTrilha"
import "./App.css"
import Header from "./components/Header"
import useFetch from "./hooks/useFetch"

function App() {

  const dados = useFetch("/dados.json")
  
  return (
    <>
      <Header />
      <div className="container">
        <h1 className="titulo">Explore trilhas incríveis</h1>
      </div>
      {!!dados && JSON.stringify(dados)}
    </>
  )
}

export default App