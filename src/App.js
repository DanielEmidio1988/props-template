import React from "react";
import "./App.css";
import Garagem from "./componentes/Garagem";
// import Carro from "./componentes/Carro"

export default function App() {
  const nome = "Labenu"
  const carro1 = {
    cor: "Azul",
    ano: 1990,
    nome: "Fusca",
    flex: "não"
  }
  const carro2 = {
    cor: "Preto",
    ano: 2002,
    nome: "Gol",
    flex: "sim"
  }
  const carro3 = {
    cor: "Vermelho",
    ano: 2022,
    nome: "Uno",
    flex: "sim"
  }
  const carro4 = {
    cor: "Branco",
    ano: 1983,
    nome: "Kombi",
    flex: "não"
  }

  // const carros = [carro1, carro2, carro3, carro4];

  function apresentaGaragem(nome){
    alert(`Boas vindas a garagem do ${nome}!`)
  }

  return (
    <div className="App">
      <Garagem nome = {nome}  apresentaGaragem = {apresentaGaragem} 
      carro1={carro1}
      carro2={carro2}
      carro3={carro3}
      carro4={carro4}/>
      
    </div>
  );
}
