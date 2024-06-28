import { IAlimento } from "./IAlimento";
export interface IRefeicao {
    id: number,
    name: string,
    alimentos: IAlimento[]
}