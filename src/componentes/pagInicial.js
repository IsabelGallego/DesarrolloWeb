import React from "react"
import { useState, useEffect } from "react"
import Estaciones from "./estaciones"


function PagInicial() {

    const [Infonetworks, setInfoNetworks] = useState([])
    const [networks, setNetworks] = useState([])

    const consultarApi = async () => {
        var url = "http://api.citybik.es/v2/networks"
        const response = await fetch(url, { method: "GET" })
            .then(response => response.json())
            .catch(error => console.log(error))
        setNetworks(response.networks)
    }


    const almacenaInfo = async (id) => {
        var url= `http://api.citybik.es/v2/networks/${id}`
        const response = await fetch(url, { method: "GET" })
            .then(response => response.json())
            .catch(error => console.log(error))
        setInfoNetworks(response.network)
    }

    useEffect(() => {
        consultarApi()
    }, [])

    
    return (
        <div className="contenedor__general">
            <div className="contenedor__networks">
                {
                    networks.map(network => {
                        return (
                            <div key={network.id}>
                                <h4 className="titulo__network" onClick={() => almacenaInfo(network.id)}>{network.name} ({network.location.city})</h4>
                                <hr></hr>
                            </div>
                        )
                    })
                }
            </div>
            <div className="contenedor__estaciones">
                <Estaciones Infonetworks={Infonetworks}></Estaciones>
            </div>
        </div>
    )
}
export default PagInicial