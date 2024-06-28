import { useState } from "react";
import { useSetListaAlimentosState } from "../../state/hooks/listaAlimentosState/useSetListaAlimentosState";
import { useRecoilState } from "recoil";
import { modalCadastrarAlimentoState } from "../../state/atom";
import { gerarID } from "../../utils/gerarID";
import { useListaAlimentosState } from "../../state/hooks/listaAlimentosState/useListaAlimentosState";
import ModalPadrao from "../ModalPadrao";
import { FormAddRefeicaoStyled } from "../FormAdicionarRefeicao/styled";
import { IAlimento } from "../../interfaces/IAlimento";

export const FormCadastrarAlimento = () => {

    const todosOsAlimentos = useListaAlimentosState()
    const setAlimentos = useSetListaAlimentosState();

    const [modal, setModal] = useRecoilState(modalCadastrarAlimentoState)

    const [alimento, setAlimento] = useState('');
    const [porcaoPadraoGramas, setPorcaoPadraoGramas] = useState(100);
    const [carboidrato, setCarboidrato] = useState(0);
    const [proteina, setProteina] = useState(0);
    const [gordura, setGordura] = useState(0);

    const cadastrarAlimento = (evento: React.FormEvent<HTMLFormElement>) => {
        evento.preventDefault();
        const novoAlimento: IAlimento = {
            id: gerarID(todosOsAlimentos),
            name: alimento,
            quantidadeEmGramas: porcaoPadraoGramas,
            infoNutricional: {
                calories: (carboidrato * 4) + (proteina * 4) + (gordura * 9),
                carbo: carboidrato,
                protein: proteina,
                fat: gordura,
                porcaoPadraoGramas: porcaoPadraoGramas
            }
        }
        setAlimentos(alimentosAntigos => [...alimentosAntigos, novoAlimento])
        setAlimento('')
        setCarboidrato(0)
        setProteina(0)
        setGordura(0)
        setPorcaoPadraoGramas(100)
        alert("Alimento cadastrado com sucesso!")
        setModal(false)
    }

    return (
        <>
            {modal &&
                <ModalPadrao setModal={setModal}>
                    <FormAddRefeicaoStyled onSubmit={cadastrarAlimento}>
                        <h4>Cadastrar Alimento</h4>
                        <label htmlFor="nomeDoAlimento">Nome do alimento:</label>
                        <input
                            id="nomeDoAlimento"
                            type="text"
                            value={alimento}
                            onChange={evento => setAlimento(evento.target.value)}
                            required
                        />
                        <label htmlFor="porcaoPadraoGramas">Porcao em gramas:</label>
                        <input type="number" id="porcaoPadraoGramas" required value={porcaoPadraoGramas} onChange={evento => setPorcaoPadraoGramas(Number(evento.target.value))} />
                        <label htmlFor="carboidrato">Carboidratos (g):</label>
                        <input type="number" id="carboidrato" required value={carboidrato} onChange={evento => setCarboidrato(Number(evento.target.value))} />
                        <label htmlFor="proteinas">Proteinas (g):</label>
                        <input type="number" id="proteinas" required value={proteina} onChange={evento => setProteina(Number(evento.target.value))} />
                        <label htmlFor="gorduras">Gorduras (g):</label>
                        <input type="number" id="gorduras" required value={gordura} onChange={evento => setGordura(Number(evento.target.value))} />
                        <button type="submit">Cadastrar</button>
                    </FormAddRefeicaoStyled>
                </ModalPadrao>
            }
        </>
    )
}

export default FormCadastrarAlimento;