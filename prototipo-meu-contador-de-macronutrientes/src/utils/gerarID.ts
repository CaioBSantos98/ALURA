
export const gerarID = (lista: any[]):number => {
    let candidatoAhId = Number(Math.random().toFixed(4)) * 10000
    let index = lista.findIndex(itemLista => itemLista.id === candidatoAhId)
    
    while(index !== -1) {
        candidatoAhId = Number(Math.random().toFixed(4)) * 10000
        index = lista.findIndex(itemLista => itemLista.id === candidatoAhId)
    }

    return candidatoAhId
}