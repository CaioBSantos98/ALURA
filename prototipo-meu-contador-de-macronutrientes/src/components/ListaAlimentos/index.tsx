import { IRefeicao } from "../../interfaces/IRefeicao";
import AlimentoLI from "./AlimentoLI";
import { ListaAlimentosStyled } from "./styled";

interface ListaAlimentosProps {
    refeicao: IRefeicao
}

const ListaAlimentos = ({ refeicao }: ListaAlimentosProps) => {
    return (
        <>
            {refeicao.alimentos && <ListaAlimentosStyled>
                {refeicao.alimentos.map(alimento => 
                    <AlimentoLI key={alimento.id} alimento={alimento} refeicao={refeicao}/>
                )}
            </ListaAlimentosStyled>}
        </>
    )
}

export default ListaAlimentos;