function Estaciones(props) {


    const info = props.Infonetworks
    const estaciones = props.Infonetworks.stations

    return (
        <div>
            <div className="informacion__estacion">
                <h4>Nombre de la Empresa: {info.company}</h4>
                <h4>País: {info.location.country}</h4>
            </div>
            <hr></hr>
            <div className="estaciones">
                <h3>Estaciones</h3>
{/*                 {
                    estaciones.map((estacion) => {
                        return(
                            <div key={estacion.id}>
                                <h4>Nombe de la Estación: {estacion.name}</h4>
                            </div>
                        )
                    })
                } */}
            </div>
        </div>
    )
}
export default Estaciones