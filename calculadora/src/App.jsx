import "./styles.css";
import { useState } from "react";
import { styled } from "styled-components";
// importar o useState

export default function App() {
  // Aqui vamos armazenar o numero inserido no input;
  const [primeiroValor, setPrimeroValor] = useState();
  const [segundoValor, setSegundoValor] = useState();
  // resultado da função soma;
  const [resultado, setResultado] = useState();

  const capturarPrimeiroValor = (e) => {
    setPrimeroValor(Number(e.target.value));
  };

  const capturarSegundoValor = (e) => {
    setSegundoValor(Number(e.target.value));
  };
  // função de Adição =>
  const Soma = () => {
    setResultado(primeiroValor + segundoValor);
  };

  return (
    <div>
      {/* Para pegar o numero digitado dentro do input vamos
      usar o evento onChange() */}
      <input onChange={capturarPrimeiroValor} />
      <input onChange={capturarSegundoValor} />
      <button onClick={Soma}>+</button>
      <h2>{resultado}</h2>
    </div>
  );
}
