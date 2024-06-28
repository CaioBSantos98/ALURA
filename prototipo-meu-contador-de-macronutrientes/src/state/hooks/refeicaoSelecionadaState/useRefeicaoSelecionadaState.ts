import { useRecoilValue } from "recoil"
import { refeicaoSelecionada } from "../../atom"

export const useRefeicaoSelecionadaState = () => {
    const refeicao = useRecoilValue(refeicaoSelecionada);
    return refeicao;
}