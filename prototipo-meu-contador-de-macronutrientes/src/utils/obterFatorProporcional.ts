import { IAlimento } from "../interfaces/IAlimento"

export const obterFatorProporcional = (alimento: IAlimento): number => {
    const fatorProporcional = alimento.quantidadeEmGramas / alimento.infoNutricional.porcaoPadraoGramas
    return fatorProporcional
}