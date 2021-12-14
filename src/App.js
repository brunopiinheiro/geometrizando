import "./App.css"
import Figura from "./components/Figura";

function App() {
  return (
    <>
      <Figura type="quadrado" titulo="Quadrado" bg="blue" />
      <Figura type="circulo" titulo="Circulo" bg="green" />
      <Figura type="retangulo" titulo="Retangulo" bg="pink" />
      <Figura type="triangulo" titulo="Triangulo" bg="yellow" />
    </>
  )
}

export default App;
