import { createSlice } from "@reduxjs/toolkit"

// Tipo para um produto
interface Product {
    id: number;
    nome: string;
    preco: number;
    quantity: number;
    imagem: string
}
// Tipo para o estado inicial
export interface ProductState {
    products: Product[];
}

const initialState: ProductState = {
    products: []
}

const productSlice = createSlice({
    name: 'product',
    initialState,
    reducers: {
        addProduct: (state, action) => {
            // Verifica se o produto já está no carrinho
            const productIsAlredyInCart = state.products.some(
                (product) => product.id === action.payload.id
            );

            // Se o produto estiver no carrinho ele adiciona uma quantidade
            if (productIsAlredyInCart) {
                state.products = state.products.map((product) =>
                    product.id === action.payload.id
                        ? { ...product, quantity: product.quantity + 1 }
                        : product
                );
                return
            }

            // Se o produto não estiver no carrinho, adiciona o produto com quantidade 1
            state.products = [...state.products, { ...action.payload, quantity: 1 }]
        }
    }
})

export const { addProduct } = productSlice.actions
export default productSlice.reducer