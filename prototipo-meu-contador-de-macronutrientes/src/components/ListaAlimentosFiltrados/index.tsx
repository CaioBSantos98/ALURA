import { IAlimento } from "../../interfaces/IAlimento";
import { ListaAlimentosFiltradosStyled } from "./styled";

interface ListaAlimentosFiltradosProps {
    alimentosFiltrados: IAlimento[],
    alimentoSelecionado: string,
    changeCheckbox: (evento: React.ChangeEvent<HTMLInputElement>, alimento: IAlimento) => void
}

const ListaAlimentosFiltrados = ({alimentosFiltrados, alimentoSelecionado, changeCheckbox}: ListaAlimentosFiltradosProps) => {
    return (
        <>
            {alimentosFiltrados.length > 0 && 
                <ListaAlimentosFiltradosStyled>
                    {alimentosFiltrados.map(alimento =>
                        <li key={alimento.id}>
                            <input
                                type="checkbox"
                                name="alimento"
                                id={alimento.name}
                                value={alimento.name}
                                checked={alimento.name === alimentoSelecionado}
                                onChange={(evento) => changeCheckbox(evento, alimento)}
                            />
                            <label htmlFor={alimento.name}>{alimento.name}</label>
                        </li>)
                    }
                </ListaAlimentosFiltradosStyled>
            }
        </>
    )
}

export default ListaAlimentosFiltrados;