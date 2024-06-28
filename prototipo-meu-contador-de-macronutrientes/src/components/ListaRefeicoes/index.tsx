import { IRefeicao } from "../../interfaces/IRefeicao";
import { obterTotal } from "../../utils/obterTotal";
import Refeicao from "../Refeicao";
import ResumoRefeicao from "../ResumoRefeicao";
import { ListaRefeicoesStyled } from "./styled";

interface ListaRefeicoesProps {
    listaRefeicoes: IRefeicao[]
}

const ListaRefeicoes = ({ listaRefeicoes }: ListaRefeicoesProps) => {

    const caloriasDodia = obterTotal(listaRefeicoes, "calories")

    return (
        <ListaRefeicoesStyled>
            <ResumoRefeicao refeicao={listaRefeicoes}>
                <h2>Resumo do dia</h2>
                <h3>KCAL: {(caloriasDodia).toFixed(2)}</h3>
            </ResumoRefeicao>
            {listaRefeicoes.map(refeicao =>
                <li key={refeicao.id}> <Refeicao {...refeicao} /></li>
            )}
        </ListaRefeicoesStyled>
    )
}

export default ListaRefeicoes;