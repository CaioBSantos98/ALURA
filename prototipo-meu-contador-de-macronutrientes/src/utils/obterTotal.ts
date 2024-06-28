import { IInfoNutricional } from "../interfaces/IInfoNutricional";
import { IRefeicao } from "../interfaces/IRefeicao"
import { obterFatorProporcional } from "./obterFatorProporcional"

type infoNutricionalChave = keyof IInfoNutricional;

export const obterTotal = <T extends infoNutricionalChave>(
    parametro: IRefeicao[] | IRefeicao,
    propriedade: T
    ):number => {
    let total: number = 0;

    if(Array.isArray(parametro)) {
        total = parametro.reduce((acum, refeicao) => {
            return acum + refeicao.alimentos.reduce((acum, alimento) => {
                const fatorProporcional = obterFatorProporcional(alimento)
                return acum + (alimento.infoNutricional[propriedade] * fatorProporcional)
            }, 0)
        }, 0)
        return total
    } else {
        total = parametro.alimentos.reduce((acum, alimento) => {
            const fatorProporcional = obterFatorProporcional(alimento)
            return acum + (alimento.infoNutricional[propriedade] * fatorProporcional)
        }, 0)
        return total
    }
}