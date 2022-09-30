import { useState } from "react";
import styled from "styled-components";


export default function Rodape({concluidos, cor, setCor, alteradorEstado, setAlteradorEstado}) {

  return (
    <>
      <RodapeStyles>
        <ContainerBotoes>
          <div className="container-botoes">
            <Red onClick ={() => {setCor("vermelha");setAlteradorEstado(!alteradorEstado)}}>Não lembrei!</Red>
            <Yellow onClick ={() => {setCor("amarela");setAlteradorEstado(!alteradorEstado)}}> Quase não Lembrei!</Yellow>
            <Green onClick ={() => {setCor("verde");setAlteradorEstado(!alteradorEstado)}}>Zap!</Green>
          </div>
        </ContainerBotoes>
        <div className="contador">{concluidos}/8 CONCLUÍDOS</div>
      </RodapeStyles>
    </>
  );
}

const RodapeStyles = styled.div`
  width: 100%;
  min-height: 50px;
  background-color: #ffffff;
  position: fixed;
  bottom: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-family: "Recursive";
  font-weight: 400;
  font-size: 18px;
  color: #333333;
  padding: 10px;
  & .container-botoes {
    display: flex;
    width: 80%;
    justify-content: space-between;
    margin: 20px;
  }
`;

const ContainerBotoes = styled.div`
  & > button {
    width: 90px;
    font-family: "Recursive";
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    line-height: 14px;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    color: #ffffff;
    background: blue;
    border-radius: 10px;
    border: 1px solid blue;
    padding: 5px;
  }
`;

const Red = styled(ContainerBotoes)`
  background-color: #ff3030;
`;

const Yellow = styled(ContainerBotoes)`
  background: #ff922e;
`;

const Green = styled(ContainerBotoes)`
  background: #2fbe34;
`;
