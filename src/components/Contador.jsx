import { useState } from "react"

const Contador = ({valorInicial}) => {
    const [contador, Usecontador] = useState(valorInicial)
    const Incrementar = ()=>{
      Usecontador(contador+1)
      console.log(contador)
    }
    const Decrementar = ()=>{
      Usecontador(contador-1)
      console.log(contador)

    }
    const Resetear = ()=>{
      Usecontador(valorInicial)
      console.log(contador)

    }
  return (
    <>
    <p>Numero actual : {contador}</p>
    <button className="btn btn-primary" onClick={Incrementar}>Incrementar</button>
    <button className="btn btn-secondary" onClick={Decrementar}>Decremetar</button>
    <button className="btn btn-ternary" onClick={Resetear}>Resetear</button>
    </>
  )
}

export default Contador