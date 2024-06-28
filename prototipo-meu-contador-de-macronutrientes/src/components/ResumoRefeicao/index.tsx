import { useEffect, useState } from "react";
import { IRefeicao } from "../../interfaces/IRefeicao";
import { ResumoRefeicaoContainerStyled, ResumoRefeicaoStyled } from "./styled";
import { obterTotal } from "../../utils/obterTotal";

interface ResumoRefeicaoProps {
    refeicao: IRefeicao | IRefeicao[];
    children?: any;
}

const ResumoRefeicao = ({ refeicao, children }: ResumoRefeicaoProps) => {

    const [totalCarbo, setTotalCarbo] = useState(0);
    const [totalProtein, setTotalProtein] = useState(0);
    const [totalFat, setTotalFat] = useState(0);

    useEffect(() => {
        if (!Array.isArray(refeicao)) {
            setTotalCarbo(obterTotal(refeicao, "carbo"))
            setTotalProtein(obterTotal(refeicao, "protein"))
            setTotalFat(obterTotal(refeicao, "fat"))
        } else {
            setTotalCarbo(obterTotal(refeicao, "carbo"))
            setTotalProtein(obterTotal(refeicao, "protein"))
            setTotalFat(obterTotal(refeicao, "fat"))
        }

    }, [refeicao])

    return (
        <>
            <ResumoRefeicaoStyled>
                {children}
                <ResumoRefeicaoContainerStyled>
                    <h4>Total:</h4>
                    <p>Carbo: {totalCarbo.toFixed(2)}</p>
                    <p>Prot: {totalProtein.toFixed(2)}</p>
                    <p>Gord: {totalFat.toFixed(2)}</p>
                </ResumoRefeicaoContainerStyled>
            </ResumoRefeicaoStyled>
        </>
    )
}

export default ResumoRefeicao;