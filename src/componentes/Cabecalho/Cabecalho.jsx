import { styled } from "styled-components"
import CampoPesquisa from "../CampoPesquisa"


const HeaderEstilizado = styled.header`
    padding: 60px 0;
    display: flex;
    justify-content: space-between;
    img {
        max-width: 212px;
    }
`


export const Cabecalho = () => {
    return (
        <HeaderEstilizado>
            <img src="/imagens/logo.png"
                alt=""
            />
            <CampoPesquisa />
        </HeaderEstilizado>
    )
}
export default Cabecalho