import styled from "styled-components";
import seta from "../img/seta_play.png";
import setaVirar from "../img/seta_virar.png";
import { useState } from "react";
import iconeErro from "../img/icone_erro.png"
import iconeCerto from "../img/icone_certo.png"
import iconeQuase from "../img/icone_quase.png"

export default function Perguntas({
  key,
  pergunta,
  resposta,
  index,
  cor,
  setCor,
  alteradorEstado,
  setAlteradorEstado,
}) {
  const [iniciadorDeQuiz, setIniciadorDeQuiz] = useState(false);
  const [viradorDeCarta, setViradorDeCarta] = useState(false);
  return (
    <>
      {iniciadorDeQuiz ? (
        <CartaAberta
          viradorDeCarta={viradorDeCarta}
          setViradorDeCarta={setViradorDeCarta}
          pergunta={pergunta}
          resposta={resposta}
          cor={cor}
          setCor={setCor}
          alteradorEstado={alteradorEstado}
          setAlteradorEstado={setAlteradorEstado}
          index = {index}
        />
      ) : (
        <CartaFechada
          iniciadorDeQuiz={iniciadorDeQuiz}
          setIniciadorDeQuiz={setIniciadorDeQuiz}
          key={key}
          index={index}
          alteradorEstado={alteradorEstado}
          setAlteradorEstado={setAlteradorEstado}
          setCor = {setCor}
        />
      )}
    </>
  );
}

function CartaFechada({ iniciadorDeQuiz, setIniciadorDeQuiz, index, alternadorEstado, setAlteradorEstado, setCor }) {
  return (
    <>
      <CartaFechadaStyle>
        <p>Pergunta {index}</p>
        <img
          src={seta}
          alt=""
          onClick={() => {setIniciadorDeQuiz(!iniciadorDeQuiz);  setCor(false)}}
        />
      </CartaFechadaStyle>
    </>
  );
}

function CartaAberta({
  viradorDeCarta,
  setViradorDeCarta,
  pergunta,
  resposta,
  cor,
  setCor,
  alteradorEstado,
  setAlteradorEstado,
  index
}) {
  if (viradorDeCarta === false) {
    return (
      <>
        <CartaAbertaStyle>
          <p>{pergunta}</p>
          <img
            src={setaVirar}
            alt="seta de virar carta"
            onClick={() => setViradorDeCarta(!viradorDeCarta)}
          />
        </CartaAbertaStyle>
      </>
    );
  }
  if (alteradorEstado === false) {
    return (
      <CartaAbertaStyle>
        <p>{resposta}</p>
      </CartaAbertaStyle>
    );
  }
  //Aqui é feito uma avaliação pra qual classe de CSS irá ser renderizado
  if (alteradorEstado && cor === "vermelha") {
    return (
      <>
        <CartaFechadaStyle>
          <p className="vermelha">Pergunta {index}</p>
          <img src={iconeErro} alt="Icone de Erro" />
        </CartaFechadaStyle>
      </>
    );
  }
  if (alteradorEstado && cor === "amarela") {
    return (
      <>
        <CartaFechadaStyle>
          <p className="amarela">Pergunta {index}</p>
          <img src={iconeQuase} alt="Icone de Erro" />
        </CartaFechadaStyle>
      </>
    );
  }
  if (alteradorEstado && cor === "verde") {
    return (
      <>
        <CartaFechadaStyle>
          <p className="verde">Pergunta {index}</p>
          <img src={iconeCerto} alt="Icone de Erro" />
        </CartaFechadaStyle>
      </>
    );
  }
}

const CartaFechadaStyle = styled.div`
  width: 300px;
  height: 35px;
  background-color: #ffffff;
  margin: 12px;
  padding: 15px;
  box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.15);
  border-radius: 5px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  & > p {
    font-family: "Recursive";
    font-style: normal;
    font-weight: 700;
    font-size: 16px;
    line-height: 19px;
    color: #333333;
  }
  & > .vermelha{
    color: red;
    text-decoration: line-through;
  }
  & > .verde{
    color: limegreen;
    text-decoration: line-through;
  }
  & > .amarela{
    color: yellow;
    text-decoration: line-through;
  }
`;

const CartaAbertaStyle = styled.div`
  width: 300px;
  margin: 12px;
  padding: 15px;
  min-height: 100px;
  background: #ffffd5;
  box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.15);
  border-radius: 5px;
  font-family: "Recursive";
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 22px;
  color: #333333;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  & img {
    position: absolute;
    bottom: 10px;
    right: 10px;
  }

`;
