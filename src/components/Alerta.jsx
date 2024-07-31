const Alerta = (props) => {
    const {children, color} = props
  return (
    <p className={`alert alert-${color} mt-3`}>{children}</p>
  )
}

export default Alerta