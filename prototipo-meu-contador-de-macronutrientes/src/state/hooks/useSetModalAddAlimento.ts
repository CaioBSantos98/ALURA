import { useSetRecoilState } from "recoil"
import { modalAdicionarAlimentoState } from "../atom"

export const useSetModalAddAlimento = () => {
    return useSetRecoilState(modalAdicionarAlimentoState);
}