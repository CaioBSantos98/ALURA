import { useSetRecoilState } from "recoil"
import { refeicaoSelecionada } from "../../atom"

export const useSetRefeicaoSelecionadaState = () => {
    return useSetRecoilState(refeicaoSelecionada);
}