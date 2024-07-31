import estilos from './EstilosTarjetaPresentacion.module.css'
const TarjetaPresentacion = (props) => {
  return (
    <>
    <div className={`card ${estilos['card-width']} d-flex justify-content-center`} >
  <img src={props.img} className="card-img-top imagen" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">Nombre : {props.nombre}</h5>
    <p className="card-text">Profesión : {props.profesion}</p>
  </div>
</div>

    </>
  )
}

export default TarjetaPresentacion