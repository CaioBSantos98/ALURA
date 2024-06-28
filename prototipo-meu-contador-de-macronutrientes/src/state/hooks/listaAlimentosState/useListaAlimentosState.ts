import { useRecoilValue } from "recoil"
import { listaAlimentos } from "../../atom"

export const useListaAlimentosState = () => {
    const lista = useRecoilValue(listaAlimentos)
    return lista;
}