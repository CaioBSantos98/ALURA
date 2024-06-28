import { IInfoNutricional } from "./IInfoNutricional";

export interface IAlimento {
    id: number,
    name: string,
    quantidadeEmGramas: number,
    marca?: string
    infoNutricional: IInfoNutricional
}