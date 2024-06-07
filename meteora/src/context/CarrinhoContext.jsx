import { createContext, useEffect, useMemo, useReducer, useState } from "react";
import { carrinhoReducer } from "../reducers/carrinhoReducer";

export const CarrinhoContext = createContext();
CarrinhoContext.displayName = "Carrinho"

const estadoInicial = [];

export const CarrinhoProvider = ({ children }) => {
    const [cart, dispatch] = useReducer(carrinhoReducer, estadoInicial)
    const [quantidade, setQuantidade] = useState(0);
    const [valorTotal, setValorTotal] = useState(0);

    const { totalTemp, quantidadeTemp } = useMemo(() => {
        return cart.reduce((acumulador, produto) => ({
            quantidadeTemp: acumulador.quantidadeTemp + produto.quantidade,
            totalTemp: acumulador.totalTemp + (produto.quantidade * produto.price)
        }),
            {
                quantidadeTemp: 0,
                totalTemp: 0
            }
        )
    }, [cart])

    useEffect(() => {
        setQuantidade(quantidadeTemp);
        setValorTotal(totalTemp);
    })

    return (
        <CarrinhoContext.Provider value={{ cart, dispatch, quantidade, setQuantidade, valorTotal, setValorTotal }}>
            {children}
        </CarrinhoContext.Provider>
    )
}

