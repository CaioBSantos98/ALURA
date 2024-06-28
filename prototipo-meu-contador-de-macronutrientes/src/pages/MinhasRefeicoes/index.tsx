import { useSetRecoilState } from "recoil";
import FormAdicionarRefeicao from "../../components/FormAdicionarRefeicao";
import FormCadastrarAlimento from "../../components/FormCadastrarAlimento";
import { modalCadastrarAlimentoState } from "../../state/atom";
import { useRefeicoesState } from "../../state/hooks/refeicoesState/useRefeicoesState";
import { useSetModalAddRefeicaoState } from "../../state/hooks/modalAddRefeicao/useSetModalAddRefeicaoState";
import FormAdicionarAlimento from "../../components/FormAdicionarAlimento";
import ListaRefeicoes from "../../components/ListaRefeicoes";
import BotaoPadrao from "../../components/BotaoPadrao";
import { ButtonContainerStyled, MinhasRefeicoesContainerStyled } from "./styled";

const MinhasRefeicoes = () => {
    const refeicoes = useRefeicoesState();
    const abrirModalAddRefeicao = useSetModalAddRefeicaoState();
    const abrirModalCadastrarRefeicao = useSetRecoilState(modalCadastrarAlimentoState)

    return (
        <MinhasRefeicoesContainerStyled>
            <h2>Minhas refeições</h2>
            <ButtonContainerStyled className="btnContainer">
                <BotaoPadrao onClick={() => abrirModalAddRefeicao(true)}>Nova refeição</BotaoPadrao>
                <BotaoPadrao onClick={() => abrirModalCadastrarRefeicao(true)}>Novo alimento</BotaoPadrao>
            </ButtonContainerStyled>
            <FormAdicionarRefeicao />
            <FormCadastrarAlimento />
            <FormAdicionarAlimento />
            <ListaRefeicoes listaRefeicoes={refeicoes} />
        </MinhasRefeicoesContainerStyled>
    )
}

export default MinhasRefeicoes;