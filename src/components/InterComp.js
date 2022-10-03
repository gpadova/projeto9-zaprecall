import styled from "styled-components";
import Cabecalho from "./cabecalho";
import Perguntas from "./perguntas";
import GlobalStyles from "./globalStyles";
import objetoPerguntas from "./objetoPerguntas";


export default function InterComp({
    disabledButton,
    setDisabledButton
}) {


    return (
    <>
        <GlobalStyles />
        <ScreenContainer>
          <Cabecalho />
          {objetoPerguntas.map((i, index) => (
            <Perguntas
              index={index + 1}
              pergunta={i.pergunta}
              resposta={i.resposta}
              disabledButton ={disabledButton}
              setDisabledButton ={setDisabledButton}
              // cor ={cor}
              // setCor = {setCor}
              // alteradorEstado = {alteradorEstado}
              // setAlteradorEstado = {setAlteradorEstado}
            />
          ))}
        </ScreenContainer>
      </>
    )

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
