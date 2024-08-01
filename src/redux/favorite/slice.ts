import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IProduto } from "../../interfaces/IProduto";
import { FavoritesState } from "../../interfaces/IFavoriteState";

export const initialState: FavoritesState = {
    produtos: [],
};

const favoriteSlice = createSlice({
    name: 'favorite',
    initialState,
    reducers: {
        addFavorite: (state, action: PayloadAction<IProduto>) => {
            // Verifica se o produto já está na lista de favoritos
            const favorite = state.produtos.find((p) => p.id === action.payload.id);
            
            if (favorite) {
                // Se o produto estiver na lista de favoritos, remove-o
                state.produtos = state.produtos.filter((p) => p.id !== action.payload.id);
            } else {
                // Se o produto não estiver na lista de favoritos, adiciona-o
                state.produtos = [...state.produtos, action.payload];
            }
        }
    }
});

export const { addFavorite } = favoriteSlice.actions
export default favoriteSlice.reducer
