import { useState } from "react";
import { useSetRefeicoesState } from "../../state/hooks/refeicoesState/useSetRefeicoesState";
import { IRefeicao } from "../../interfaces/IRefeicao";
import { gerarID } from "../../utils/gerarID";
import { useRefeicoesState } from "../../state/hooks/refeicoesState/useRefeicoesState";
import { useSetModalAddRefeicaoState } from "../../state/hooks/modalAddRefeicao/useSetModalAddRefeicaoState";
import { useModalAddRefeicaoState } from "../../state/hooks/modalAddRefeicao/useModalAddRefeicaoState";
import ModalPadrao from "../ModalPadrao";
import { FormAddRefeicaoStyled } from "./styled";

const FormAdicionarRefeicao = () => {

    const todasAsRefeicoes = useRefeicoesState();
    const setRefeicoes = useSetRefeicoesState();
    const modalState = useModalAddRefeicaoState();
    const setModalState = useSetModalAddRefeicaoState();
    
    const [refeicao, setRefeicao] = useState('');

    function adicionarRefeicao(evento: React.FormEvent<HTMLFormElement>) {
        evento.preventDefault();
        const refeicaoASerAdicionada: IRefeicao = {
            id: gerarID(todasAsRefeicoes),
            name: refeicao,
            alimentos: []
        }
        setRefeicoes(refeicoesAntigas => [...refeicoesAntigas, refeicaoASerAdicionada])
        setRefeicao('')
        setModalState(false)
    }

    return (
        <>
            {modalState &&
                <ModalPadrao setModal={setModalState}>
                    <FormAddRefeicaoStyled onSubmit={adicionarRefeicao}>
                        <h4>Adicionar Refeição</h4>
                        <input 
                            type="text" 
                            placeholder="Lanches..."
                            value={refeicao}
                            onChange={evento => setRefeicao(evento.target.value)}
                            required
                        />
                        <button type="submit">Adicionar</button>
                    </FormAddRefeicaoStyled>
                </ModalPadrao>
            }
        </>
    )
}

export default FormAdicionarRefeicao;