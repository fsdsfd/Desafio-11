// Usar rafc para crear un componente, se llama componente porque retorna jsx
// Poner en mayuscula para diferenciar de archivos html
import { useState } from 'react'
import Alerta from './components/Alerta'
import Contador from './components/Contador'
import TarjetaPresentacion from './components/Estilos/TarjetaPresentacion'
import Formulario from './components/Formulario'
import './InicioApp.css'
import contactos from './constants/contactos'
// Solo se puede improtar un jsx
const InicioApp = () => {
  const [contacts, setContacto] = useState(contactos)
  const agregarContacto = (contacto) =>{
    console.log('agregando contacto:', contacto)
    const nuevoEstadoContactos = [...contacts, contacto] 
    setContacto(nuevoEstadoContactos)
  }
  return (
    <div className='container'> 
    <h1>Ejercicio 1</h1>
    <hr />
    <TarjetaPresentacion img = './hombre-profesion.png'nombre='Tomás' profesion='programador'></TarjetaPresentacion>
    <hr />
    <h1>Ejercicio 2</h1>
    <hr />
    <Alerta color = 'danger' children='Alerta danger' ></Alerta>
    <Alerta color = 'success' children='Alerta success' ></Alerta>
    <Alerta color = 'warning' children='Alerta warning' ></Alerta>
    <hr />
    <h1>Ejercicio 3</h1>
    <hr />
    <Contador valorInicial={0}></Contador>
    <h1>Ejercicio 4</h1>
    <div className="container">
    <Formulario agregarContacto={agregarContacto}></Formulario>

    </div>
    </div>
  )
}

export default InicioApp