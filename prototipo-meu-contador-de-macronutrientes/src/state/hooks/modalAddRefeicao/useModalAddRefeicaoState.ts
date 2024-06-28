import { useRecoilValue } from "recoil"
import { modalAddRefeicaoState } from "../../atom"

export const useModalAddRefeicaoState = () => {
    return useRecoilValue(modalAddRefeicaoState)
}