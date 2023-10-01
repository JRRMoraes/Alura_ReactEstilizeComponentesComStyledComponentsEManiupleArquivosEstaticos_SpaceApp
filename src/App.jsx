import { styled } from "styled-components"
import EstilosGlobais from "/src/EstilosGlobais"
import Cabecalho from "/src/componentes/Cabecalho"
import BarraLateral from "/src/componentes/BarraLateral/BarraLateral"
import Banner from "/src/componentes/Banner/Banner"
import imgBannerBackground from "/public/imagens/banner.png"


const FundoGradiente = styled.div`
        background: linear-gradient(174.61deg, #041833 4.16%, #04244F 48%, #154580 96.76%);
        width: 100%;
        min-height: 100vh;
        `


function App() {
    return (
        <>
            <FundoGradiente>
                <EstilosGlobais />
                <Banner backgroundImage={imgBannerBackground}
                    texto="A galeria mais completa de fotos do espaço!"
                />
                <Cabecalho />
                <BarraLateral />
            </FundoGradiente>
        </>
    )
}


export default App
