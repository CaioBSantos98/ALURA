import { useSetRecoilState } from "recoil"
import { refeicoesState } from "../../atom"

export const useSetRefeicoesState = () => {
    return useSetRecoilState(refeicoesState);
}