import { useState, useEffect, useCallback } from 'react'

function Estaciones(props) {

    const info = props.Infonetworks
    const estaciones = props.Infonetworks.stations
    const [all_free_bikes, setAllFB] = useState()
    const [all_empty_slots, setAllES] = useState()
    console.log(!estaciones)

    const handleCount = useCallback(() => {
        var temp_stations = estaciones
        var all_empty_slots = 0
        var all_free_bikes = 0
        for (var i in temp_stations) {
            all_empty_slots = all_empty_slots + temp_stations[i].empty_slots
            all_free_bikes = all_free_bikes + temp_stations[i].free_bikes
        }
        setAllFB(all_free_bikes)
        setAllES(all_empty_slots)
    }, [estaciones]);

    useEffect(() => {
        handleCount()
    }, [handleCount])

    if (!estaciones) {
        return (
            <div>
                <h1><center>Seleccione una Network</center></h1>
            </div>
        )
    }
    return (
        <div>
            <center><h2>Compañía: {info.company}</h2>
            <h3>País: {info.location.country}</h3>
            <hr></hr>
            <h4>Estaciones || Total Bicicletas Libres: {all_free_bikes} || Total Espacios Libres: {all_empty_slots}</h4></center>
            <hr></hr>
            {
                !estaciones ? 'No hay estaciones' : estaciones.map((estacion) => {
                    return (
                        <div key={estacion.id}>
                            <h5>Nombre de la Estación: {estacion.name}</h5>
                            <h5>Bicicletas Libres: {estacion.free_bikes ?? 'No hay Info'}</h5>
                            <h5>Espacios Libres: {estacion.empty_slots ?? 'No hay Info'}</h5>
                            <h5>Total de Espacios: {estacion.free_bikes + estacion.empty_slots}</h5>
                            <h5>Última Actualización: {estacion.timestamp}</h5>
                            <hr></hr>
                        </div>
                    )
                })
            }
        </div>
    )
}
export default Estaciones