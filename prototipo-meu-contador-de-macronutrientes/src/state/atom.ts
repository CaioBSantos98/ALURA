import { atom } from "recoil";
import { IRefeicao } from "../interfaces/IRefeicao";
import alimentos from "../../db.json";
import { IAlimento } from "../interfaces/IAlimento";

export const refeicoesState = atom<IRefeicao[]>({
    key: 'refeicoesState',
    default: [
        {id: 1, name: "Café da manhã", alimentos: []}, 
        {id: 2, name: "Almoço", alimentos: []}, 
        {id: 3, name: "Café da tarde", alimentos: []}, 
        {id: 4, name: "Jantar", alimentos: []}, 
    ]
})

export const modalAddRefeicaoState = atom<boolean>({
    key: 'modalAddRefeicaoState',
    default: false
})

export const modalCadastrarAlimentoState = atom<boolean>({
    key: 'modalCadastrarAlimentoState',
    default: false
})

export const modalAdicionarAlimentoState = atom<boolean>({
    key: 'modalAdicionarAlimentoState',
    default: false
})

export const listaAlimentos = atom<IAlimento[]>({
    key: 'listaAlimentos',
    default: alimentos
})

export const refeicaoSelecionada = atom<IRefeicao>({
    key: 'refeicaoSelecionada',
    default: {id: 0, name: 'Nenhuma', alimentos: []}
})
