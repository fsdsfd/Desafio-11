import React, { useEffect, useState } from 'react'
import Alerta from './Alerta'

const Formulario = ({agregarContacto}) => {
    const formInicial = {
        id: null,
        nombre : '',
        email : '',
        password : ''
    }
    const [form, setForm] = useState(formInicial)
    const [texto, setTexto] = useState(false)
    const handleChange = (e)=>{
        setForm({
            ...form,
            [e.target.name] : e.target.value,
        })
    }

    const handleSubmit = (e)=>{
        e.preventDefault()
        agregarContacto(form)
        console.log(agregarContacto)
        console.log(form)
      console.log(texto)
        setTexto(true)
    }
    const respuestaForm = 'Completaste el formulario con los siguientes datos:'
    const respuestaFormCompleta = `Nombre : ${form.nombre}. Email : ${form.email}. Constraseña : ${form.password}.`
  return (
    <div>
        <form onSubmit={handleSubmit}>
        <div className="mb-3">
    <label htmlFor="lbl-nombre" className="form-label">Nombre</label>
    <input 
    type="text" 
    className="form-control" 
    id="lbl-nombre"
    name='nombre'
    onChange={handleChange}/>
  </div>
  <div className="mb-3">
    <label htmlFor="lbl-email" className="form-label">Email</label>
    <input type="email" 
    className="form-control" 
    id="lbl-email" 
    aria-describedby="emailHelp" 
    name='email'
    onChange={handleChange}/>
  </div>
  <div className="mb-3">
    <label htmlFor="lbl-password" className="form-label">Contraseña</label>
    <input
     type="password"
      className="form-control" 
      id="lbl-password" 
      name='password'
      onChange={handleChange}/>
  </div>

  <button type="submit" className="btn btn-primary" >Enviar</button>
  {texto && <Alerta color='success' children={respuestaForm} ></Alerta>}
  {texto && <Alerta color='success' children={respuestaFormCompleta} ></Alerta>}

</form>

    </div>
  )
}

export default Formulario