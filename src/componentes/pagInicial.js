import React from "react"
import { useState, useEffect } from "react"


function PagInicial() {

    const [networks, setNetworks] = useState([])
    const consultarApi = async () => {
        var url = "http://api.citybik.es/v2/networks"
        const response = await fetch(url, { method: "GET" })
            .then(response => response.json())
            .catch(error => console.log(error))
        setNetworks(response.networks)
        console.log(networks)
    }

    useEffect(()=>{
        consultarApi()
    }, [])
    return (
        <div>
            Página Inicial
            {
                networks.map(network => {
                    return(
                        <div>{network.name}</div>
                    )
                })
            }
        </div>
    )
}
export default PagInicial