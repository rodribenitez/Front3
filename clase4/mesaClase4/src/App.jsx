import ClassComponent from './assets/components/ClassComponent'
import FuncionalComponent from './assets/components/FuncionalComponent'
import MockComponent from './assets/components/MockComponent'
function App() {
  const informacion = {
    saludo : "Buenas buenas",
    texto : "Aguante camada3",
    final : "Estoy desde app"
  }

  return (
    <div>
      <ClassComponent informacion = {informacion} />
      <FuncionalComponent message = {informacion} />
      <MockComponent message = {informacion.final} />
    </div>
  )
}

export default App
