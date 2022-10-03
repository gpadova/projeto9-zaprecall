import styled from "styled-components";
import Cabecalho from "./cabecalho";

import Perguntas from "./perguntas";
import GlobalStyles from "./globalStyles";
import { useState } from "react";
import objetoPerguntas from "./objetoPerguntas";
import InterComp from "./InterComp"

export default function App() {
  const [disabledButton, setDisabledButton] = useState(true);
  return (
    <>

        <InterComp disabledButton ={disabledButton} setDisabledButton = {setDisabledButton}/>
        
        {/* <Rodape
        concluidos={concluidos}
        cor={cor}
        setCor={setCor}
        disabledButton={disabledButton}
        setdisabledButton={setdisabledButton}
        setConcluidos ={setConcluidos}
        /> */}

    </>
  );
}

