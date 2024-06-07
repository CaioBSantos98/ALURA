import { useContext, useEffect, useMemo } from "react"
import { CarrinhoContext } from "../context/CarrinhoContext"
import { ADD_PRODUTO, REMOVE_PRODUTO, UPDATE_QUANTIDADE } from "../reducers/carrinhoReducer";

const addProdutoAction = (novoProduto) => ({
    type: ADD_PRODUTO,
    payload: novoProduto
})

const removeProdutoAction = (produtoId) => ({
    type: REMOVE_PRODUTO,
    payload: produtoId
})

const updateQuantidadeAction = (produtoId, quantidade) => ({
    type: UPDATE_QUANTIDADE,
    payload: { produtoId, quantidade}
})

export const useCarrinhoContext = () => {
    const { cart, dispatch, quantidade, setQuantidade, valorTotal, setValorTotal } = useContext(CarrinhoContext);

    function addToCart(newProduct) {
        dispatch(addProdutoAction(newProduct))
    }

    function removeSingleProductOfCart(id) {
        const productInCart = cart.find((cartItem) => cartItem.id === id)

        if (productInCart && productInCart.quantidade > 1) {
            dispatch(updateQuantidadeAction(id, productInCart.quantidade - 1));
        } else {
            dispatch(removeProdutoAction(id));
        }
    }

    function removeTypeProduct(id) {
        dispatch(removeProdutoAction(id));
    }

    return {
        cart,
        addToCart,
        removeProductOfCart: removeSingleProductOfCart,
        removeTypeProduct,
        valorTotal,
        quantidade
    }
}