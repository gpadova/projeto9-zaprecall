import styled from "styled-components";
import seta from "../img/seta_play.png";
import setaVirar from "../img/seta_virar.png";
import { useState } from "react";
import iconeErro from "../img/icone_erro.png";
import iconeCerto from "../img/icone_certo.png";
import iconeQuase from "../img/icone_quase.png";

export default function Perguntas({
  pergunta,
  resposta,
  index,
  disabledButton,
  setDisabledButton,
  // cor,
  // setCor,
  // alteradorEstado,
  // setAlteradorEstado,
}) {
  const [iniciadorDeQuiz, setIniciadorDeQuiz] = useState(false);
  const [viradorDeCarta, setViradorDeCarta] = useState(false);
  const [concluidos, setConcluidos] = useState(0);
  const [cor, setCor] = useState();
  const [alteradorEstado, setAlteradorEstado] = useState(false);

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
          index={index}
          disabledButton={disabledButton}
          setDisabledButton={setDisabledButton}
        />
      ) : (
        <CartaFechada
          iniciadorDeQuiz={iniciadorDeQuiz}
          setIniciadorDeQuiz={setIniciadorDeQuiz}
          index={index}
          alteradorEstado={alteradorEstado}
          setAlteradorEstado={setAlteradorEstado}
          setCor={setCor}
        />
      )}
      <RodapeStyles>
        <ContainerBotoes>
          <div className="container-botoes">
            <button
              className="vermelha"
              onClick={() => {
                // selecionaCorVermelha({ setCor });
                setCor("vermelha");
                ultimoEstado({ alteradorEstado, setAlteradorEstado });
                setConcluidos(concluidos + 1);
                setDisabledButton(true);
              }}
              disabled={disabledButton}
            >
              Não lembrei!
            </button>
            <button
              className="amarela"
              onClick={() => {
                // selecionaCorAmarelo({ setCor });
                setCor("amarela");
                ultimoEstado({ alteradorEstado, setAlteradorEstado });
                setConcluidos(concluidos + 1);
                setDisabledButton(true);
              }}
              disabled={disabledButton}
            >
              Quase não Lembrei!
            </button>
            <button
              className="verde"
              onClick={() => {
                // selecionaCorVerde({ setCor });
                setCor(new "verde");
                ultimoEstado({ alteradorEstado, setAlteradorEstado });
                setConcluidos(concluidos + 1);
                setDisabledButton(true);
              }}
              disabled={disabledButton}
            >
              Zap!
            </button>
          </div>
          {console.log(cor)}
        </ContainerBotoes>
        <div className="contador">{concluidos}/8 CONCLUÍDOS</div>
      </RodapeStyles>
    </>
  );
}
// function selecionaAmarela(setCor, cor){
//   let verde = [...cor,"amarela"]
//   setCor(verde[verde.length - 1])
// }

function CartaFechada({
  iniciadorDeQuiz,
  setIniciadorDeQuiz,
  index,
  alternadorEstado,
  setAlteradorEstado,
  setCor,
}) {
  return (
    <>
      <CartaFechadaStyle>
        <p>Pergunta {index}</p>
        <img
          src={seta}
          alt=""
          onClick={() => {
            setIniciadorDeQuiz(!iniciadorDeQuiz);
            setAlteradorEstado(false);
          }}
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
  index,
  disabledButton,
  setDisabledButton,
}) {
  {
    console.log(cor);
  }
  if (viradorDeCarta === false) {
    return (
      <>
        <CartaAbertaStyle>
          <p>{pergunta}</p>

          <img
            src={setaVirar}
            alt="seta de virar carta"
            onClick={() => {
              // virarCarta({ viradorDeCarta, setViradorDeCarta });
              setViradorDeCarta(true);
              setDisabledButton(false);
              // habilitarBotao({setDisabledButton, disabledButton})
            }}
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
  else if (alteradorEstado && cor === "vermelha") {
    return (
      <>
        <CartaFechadaStyle>
          <p className="vermelha">Pergunta {index}</p>
          <img src={iconeErro} alt="Icone de Erro" />
        </CartaFechadaStyle>
      </>
    );
  } else if (alteradorEstado && cor === "amarela") {
    return (
      <>
        <CartaFechadaStyle>
          <p className="amarela">Pergunta {index}</p>
          <img src={iconeQuase} alt="Icone de Erro" />
        </CartaFechadaStyle>
      </>
    );
  } else {
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

function ultimoEstado({ alteradorEstado, setAlteradorEstado }) {
  if (alteradorEstado === false) {
    setAlteradorEstado(!alteradorEstado);
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
  & > .vermelha {
    color: red;
    text-decoration: line-through;
  }
  & > .verde {
    color: limegreen;
    text-decoration: line-through;
  }
  & > .amarela {
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
  & .vermelha {
    background-color: #ff3030;
    width: 70px;
  }
  & .verde {
    background-color: #2fbe34;
    width: 70px;
  }
  & .amarela {
    background-color: #ff922e;
    width: 70px;
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
