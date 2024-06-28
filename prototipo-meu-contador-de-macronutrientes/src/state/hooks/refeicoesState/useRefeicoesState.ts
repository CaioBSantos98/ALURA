import { useRecoilValue } from "recoil"
import { refeicoesState } from "../../atom"

export const useRefeicoesState = () => {
    const refeicoes = useRecoilValue(refeicoesState)
    return refeicoes;
}