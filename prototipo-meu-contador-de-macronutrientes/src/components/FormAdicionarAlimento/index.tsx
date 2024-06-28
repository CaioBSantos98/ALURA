import { useEffect, useRef, useState } from "react";
import { useListaAlimentosState } from "../../state/hooks/listaAlimentosState/useListaAlimentosState";
import { useRecoilState } from "recoil";
import { modalAdicionarAlimentoState } from "../../state/atom";
import { useRefeicaoSelecionadaState } from "../../state/hooks/refeicaoSelecionadaState/useRefeicaoSelecionadaState";
import ModalPadrao from "../ModalPadrao";
import { useRefeicoesState } from "../../state/hooks/refeicoesState/useRefeicoesState";
import { useSetRefeicoesState } from "../../state/hooks/refeicoesState/useSetRefeicoesState";
import ListaAlimentosFiltrados from "../ListaAlimentosFiltrados";
import { FormAdicionarAlimentoStyled } from "./styled";
import { removerAcentos } from "../../utils/removerAcentos";
import { IAlimento } from "../../interfaces/IAlimento";

export const FormAdicionarAlimento = () => {

    const refeicoes = useRefeicoesState();
    const setRefeicoes = useSetRefeicoesState();
    const refeicaoSelecionada = useRefeicaoSelecionadaState();

    const alimentos = useListaAlimentosState();

    const [modal, setModal] = useRecoilState(modalAdicionarAlimentoState);

    const [alimentosFiltrados, setAlimentosFiltrados] = useState<IAlimento[]>([]);
    const [filtro, setFiltro] = useState('');
    const [quantidade, setQuantidade] = useState(0);
    const [alimentoSelecionado, setAlimentoSelecionado] = useState('');
    const [alimentoSelecionadoObjeto, setAlimentoSelecionadoObjeto] = useState<IAlimento>();

    const inputFiltroRef = useRef<HTMLInputElement>(null);

    useEffect(() => {
        if (filtro.length === 0) {
            setAlimentosFiltrados([])
            setAlimentoSelecionadoObjeto(undefined)
        } else {
            setAlimentosFiltrados(alimentos)
            setAlimentosFiltrados(alimentosAnterior =>
                alimentosAnterior.filter(alimento =>
                    removerAcentos(alimento.name).toLowerCase().includes(removerAcentos(filtro.toLowerCase()))
                )
            )
        }
    }, [filtro, alimentos])

    const aoAddAlimento = (evento: React.FormEvent<HTMLFormElement>) => {
        evento.preventDefault();
        const index = refeicoes.findIndex(refeicao => refeicao.id === refeicaoSelecionada.id)

        if (index !== -1 && alimentoSelecionadoObjeto && quantidade > 0) {
            const novaListaRefeicoes = [...refeicoes]
            const novoAlimento = {...alimentoSelecionadoObjeto, quantidadeEmGramas: quantidade}

            novaListaRefeicoes[index] = {
                ...novaListaRefeicoes[index],
                alimentos: [
                    ...novaListaRefeicoes[index].alimentos,
                    novoAlimento
                ]
            };

            setRefeicoes(novaListaRefeicoes);
            setAlimentoSelecionado('')
            setAlimentoSelecionadoObjeto(undefined)
            setFiltro('');
            setQuantidade(0)

            if (inputFiltroRef.current) {
                inputFiltroRef.current.focus();
            }

        } else {
            console.error("Selecione um alimento para adicionar!")
        }
    }

    const changeCheckbox = (evento: React.ChangeEvent<HTMLInputElement>, alimento: IAlimento) => {
        const { value } = evento.target;
        if (alimentoSelecionado === value) {
            setAlimentoSelecionado('')
            setAlimentoSelecionadoObjeto(undefined)
        } else {
            setAlimentoSelecionado(value)
            setAlimentoSelecionadoObjeto(alimento)
        }
    }

    return (
        <>
            {modal &&
                <ModalPadrao setModal={setModal}>
                    <FormAdicionarAlimentoStyled onSubmit={aoAddAlimento}>
                        <h3>Adicionar ao {refeicaoSelecionada.name.toLowerCase()}</h3>
                        <div>
                            <input
                                type="text"
                                placeholder="Pesquise seu alimento"
                                value={filtro}
                                onChange={evento => setFiltro(evento.target.value)}
                                ref={inputFiltroRef}
                            />
                            {alimentoSelecionadoObjeto && <>
                                    <label htmlFor="quantidade">Quantidade em gramas:</label>
                                    <input
                                        id="quantidade"
                                        type="number"
                                        value={quantidade}
                                        onChange={evento => setQuantidade(Number(evento.target.value))}
                                    />
                            </>}
                            <button>Adicionar alimento</button>
                            {alimentosFiltrados.length === 0 && filtro.length > 0 && <p>Nenhum alimento encontrado.</p>}
                        </div>
                        <ListaAlimentosFiltrados
                            alimentosFiltrados={alimentosFiltrados}
                            alimentoSelecionado={alimentoSelecionado}
                            changeCheckbox={changeCheckbox}
                        />
                    </FormAdicionarAlimentoStyled>
                </ModalPadrao>
            }
        </>
    )
}

export default FormAdicionarAlimento;