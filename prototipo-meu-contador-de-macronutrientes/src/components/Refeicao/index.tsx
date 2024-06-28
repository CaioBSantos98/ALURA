import { IRefeicao } from "../../interfaces/IRefeicao";
import { useSetRefeicoesState } from "../../state/hooks/refeicoesState/useSetRefeicoesState";
import DeleteIcon from '@mui/icons-material/Delete';
import { RefeicaoContainerStyled } from "./styled";
import AddIcon from '@mui/icons-material/Add';
import { useSetModalAddAlimento } from "../../state/hooks/useSetModalAddAlimento";
import { useSetRefeicaoSelecionadaState } from "../../state/hooks/refeicaoSelecionadaState/useSetRefeicaoSelecionadaState";
import ListaAlimentos from "../ListaAlimentos";
import { useEffect, useState } from "react";
import ResumoRefeicao from "../ResumoRefeicao";
import { obterTotal } from "../../utils/obterTotal";

const Refeicao = (refeicao: IRefeicao) => {
    const setRefeicoes = useSetRefeicoesState();
    const setModalAddAlimento = useSetModalAddAlimento();
    const setRefeicaoSelecionada = useSetRefeicaoSelecionadaState();

    const [totalDeCalorias, setTotalDeCalorias] = useState(0);

    const excluirRefeicao = (id: number) => {
        setRefeicoes(refeicoesAntigas => {
            const refeicoesAtualizada = refeicoesAntigas.filter(refeicao => refeicao.id !== id)
            return refeicoesAtualizada
        })
    }

    const abrirModalAddAlimento = () => {
        setModalAddAlimento(true);
        setRefeicaoSelecionada(refeicao);
    }

    useEffect(() => {
        const somaCalorias = obterTotal(refeicao, "calories")
        setTotalDeCalorias(somaCalorias)
    }, [refeicao])

    return (
        <RefeicaoContainerStyled>
            <header>
                <h3>{refeicao.name}</h3>
                <div>
                    {totalDeCalorias > 0 && <p>KCAL: {(totalDeCalorias).toFixed(2)}</p>}
                    <AddIcon style={{ cursor: "pointer" }} onClick={() => abrirModalAddAlimento()} />
                    <DeleteIcon style={{ cursor: "pointer" }} onClick={() => excluirRefeicao(refeicao.id)} />
                </div>
            </header>
            {totalDeCalorias > 0 && <ResumoRefeicao refeicao={refeicao} />}
            <ListaAlimentos refeicao={refeicao} />
        </RefeicaoContainerStyled>
    )
}

export default Refeicao;