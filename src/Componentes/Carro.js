import React from "react";

export function Carro(props) {
    // const carro = {
    //     cor: "Azul",
    //     ano: 1990,
    //     nome: "Fusca",
    //     flex: "não"
    // }
    return (
        <>
            <h2>{props.carro.nome}</h2>
            <ul>
                <li>Cor: {props.carro.cor}</li>
                <li>Ano: {props.carro.ano}</li>
                <li>Flex: {props.carro.flex}</li>
            </ul>
        </>
    )
}