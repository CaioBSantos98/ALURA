import { useSetRecoilState } from "recoil";
import { listaAlimentos } from "../../atom";

export const useSetListaAlimentosState = () => {
    const useSetListaAlimentos = useSetRecoilState(listaAlimentos);
    return useSetListaAlimentos;
}