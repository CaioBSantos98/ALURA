import { IAlimento } from "../../../interfaces/IAlimento";
import { IRefeicao } from "../../../interfaces/IRefeicao";
import { useRefeicoesState } from "../../../state/hooks/refeicoesState/useRefeicoesState";
import { useSetRefeicoesState } from "../../../state/hooks/refeicoesState/useSetRefeicoesState";
import { obterFatorProporcional } from "../../../utils/obterFatorProporcional";
import { AlimentoDataContainerStyled, AlimentoLIStyled, IconContainerStyled } from "./styled";
import RemoveIcon from '@mui/icons-material/Remove';
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import { useEffect, useRef, useState } from "react";

interface AlimentoLIProps {
    refeicao: IRefeicao,
    alimento: IAlimento
}

const AlimentoLI = ({ alimento, refeicao }: AlimentoLIProps) => {

    const todasRefeicoes = useRefeicoesState();
    const setTodasRefeicoes = useSetRefeicoesState();

    const [alterandoAlimento, setAlterandoAlimento] = useState(false)
    const [novaQuantidadeInput, setNovaQuantidadeInput] = useState(alimento.quantidadeEmGramas)
    const inputRef = useRef<HTMLInputElement>(null)

    const fatorProporcional = obterFatorProporcional(alimento);

    const excluirAlimento = (alimentoAhExcluir: IAlimento) => {
        const refeicaoEncontrada = todasRefeicoes.find(item => item.id === refeicao.id)
        if(refeicaoEncontrada) {
            const novaRefeicao: IRefeicao = {
                ...refeicaoEncontrada,
                alimentos: [...refeicaoEncontrada.alimentos.filter(item => item.id !== alimentoAhExcluir.id)]
            }
            
            setTodasRefeicoes(refeicoesAntigas =>
                refeicoesAntigas.map(refeicaoAntiga => {
                    if (refeicaoAntiga.id === novaRefeicao.id) return novaRefeicao
                    return refeicaoAntiga
                })
            )
        }
    }

    const alterarAlimento = ( alimentoAhAlterar: IAlimento, novaQuantidade: number) => {
        const refeicaoEncontrada = todasRefeicoes.find(item => item.id === refeicao.id)
        if (refeicaoEncontrada) {
            const novaRefeicao: IRefeicao = {
                ...refeicaoEncontrada,
                alimentos: [...refeicaoEncontrada.alimentos.map(alimento => {
                    if (alimento.id === alimentoAhAlterar.id) {
                        const alimentoAlterado = {
                            ...alimento,
                            quantidadeEmGramas: novaQuantidade
                        }
                        return alimentoAlterado
                    }
                    return alimento
                })]
            }

            setTodasRefeicoes(refeicoesAntigas =>
                refeicoesAntigas.map(refeicaoAntiga => {
                    if (refeicaoAntiga.id === novaRefeicao.id) return novaRefeicao
                    return refeicaoAntiga
                })
            )
        }
        setAlterandoAlimento(false)
    }

    useEffect(() => {
        if (alterandoAlimento && inputRef.current) {
            inputRef.current.focus();
        }
    }, [alterandoAlimento])

    return (
        <AlimentoLIStyled>
            <header>
                <h4>{alimento.name}</h4>
                {alterandoAlimento ? 
                    <input 
                        type="number"
                        value={novaQuantidadeInput}
                        onChange={evento => setNovaQuantidadeInput(Number(evento.target.value))}
                        onBlur={() => alterarAlimento(alimento, novaQuantidadeInput)}
                        ref={inputRef}
                    /> :
                    <p>{alimento.quantidadeEmGramas}g</p>
                }
            </header>
            <IconContainerStyled>
                <EditOutlinedIcon onClick={() => setAlterandoAlimento(!alterandoAlimento)}/>
                <RemoveIcon onClick={() => excluirAlimento(alimento)} />
            </IconContainerStyled>
            <AlimentoDataContainerStyled>
                <div>
                    <p>C: {(alimento.infoNutricional.carbo * fatorProporcional).toFixed(2)}g</p>
                    <p>P: {(alimento.infoNutricional.protein * fatorProporcional).toFixed(2)}g</p>
                    <p>G: {(alimento.infoNutricional.fat * fatorProporcional).toFixed(2)}g</p>
                </div>
                <p>Calorias: {(alimento.infoNutricional.calories * fatorProporcional).toFixed(2)}</p>
            </AlimentoDataContainerStyled>
        </AlimentoLIStyled>
    )
}

export default AlimentoLI;