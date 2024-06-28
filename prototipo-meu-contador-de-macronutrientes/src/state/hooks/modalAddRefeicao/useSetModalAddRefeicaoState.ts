import { useSetRecoilState } from "recoil"
import { modalAddRefeicaoState } from "../../atom"

export const useSetModalAddRefeicaoState = () => {
    return useSetRecoilState(modalAddRefeicaoState);
}