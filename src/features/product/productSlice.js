import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { fetchProduct } from './productAPI';

const initialState = {
  productArray: [],
  status: 'idle',
};
export const productAsyncApi = createAsyncThunk(
  'product/fetchProduct',
  async () => {
    const response = await fetchProduct();
    return response.data;
  }
);

export const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(productAsyncApi.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(productAsyncApi.fulfilled, (state, action) => {
        state.status = 'idle';
        state.productArray = action.payload;
      });
  },
});

export const { increment, decrement, incrementByAmount } = productSlice.actions;
export default productSlice.reducer;
