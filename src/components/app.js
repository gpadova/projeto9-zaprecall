import styled from "styled-components";
import Cabecalho from "./cabecalho";
import Rodape from "./rodape";
import Perguntas from "./perguntas";
import GlobalStyles from "./globalStyles";
import { useState } from "react";
import objetoPerguntas from "./objetoPerguntas";

export default function App() {
  const [concluidos, setConcluidos] = useState(0);
  const [cor, setCor] = useState();
  const [alteradorEstado, setAlteradorEstado] = useState(false);

  return (
    <>
      <GlobalStyles />
      <ScreenContainer>
        <Cabecalho />
        {objetoPerguntas.map((i, index) => (
          <Perguntas
            key={index}
            index={index + 1}
            pergunta={i.pergunta}
            resposta={i.resposta}
            cor ={cor}
            setCor = {setCor}
            alteradorEstado = {alteradorEstado}
            setAlteradorEstado = {setAlteradorEstado}
          />
        ))}
        <Rodape
          concluidos={concluidos}
          cor={cor}
          setCor={setCor}
          alteradorEstado={alteradorEstado}
          setAlteradorEstado={setAlteradorEstado}
        />
      </ScreenContainer>
    </>
  );
}

const ScreenContainer = styled.div`
  background-color: #fb6b6b;
  width: 100vw;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0px;
  padding: 0px;
  padding-bottom: 200px;
`;
