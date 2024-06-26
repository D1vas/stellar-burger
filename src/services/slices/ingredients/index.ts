import { getIngredientsApi } from '@api';
import { TIngredient } from '@utils-types';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

interface IngredientsState {
  isLoading: boolean;
  ingredients: TIngredient[];
}

const initialState: IngredientsState = {
  isLoading: false,
  ingredients: []
};

const fetchIngredients = createAsyncThunk(
  'ingredients/fetch',
  async () => await getIngredientsApi()
);

const ingredientsSlice = createSlice({
  name: 'ingredients',
  initialState,
  reducers: {},
  selectors: {
    selectorIngredients: (state) => state.ingredients,
    selectorIsLoading: (state) => state.isLoading
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchIngredients.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchIngredients.fulfilled, (state, action) => {
        state.ingredients = action.payload;
        state.isLoading = false;
      })
      .addCase(fetchIngredients.rejected, (state) => {
        state.isLoading = false;
      });
  }
});

export const ingredientsReducer = ingredientsSlice.reducer;
const { selectorIngredients, selectorIsLoading } = ingredientsSlice.selectors;

export {
  ingredientsSlice,
  selectorIngredients,
  selectorIsLoading,
  fetchIngredients,
  initialState
};
