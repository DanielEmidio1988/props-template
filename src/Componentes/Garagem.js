import React from "react"
import {Carro} from "./Carro"

export default function Garagem(props) {
    // const nome = "Labenu"
    return (
        <section class="garagem">
            <h1>Garagem de {props.nome}</h1>
            <button onClick={() => props.apresentaGaragem(props.nome) }>Clique aqui</button>
            <Carro carro={props.carro1} />
            <Carro carro={props.carro2}/>
            <Carro carro={props.carro3}/>
            <Carro carro={props.carro4}/>
        </section>
    )
}

