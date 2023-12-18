import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { TypeInitialState } from "@/utils/type";
import { SelectedHeadphone } from "../../utils/type";
import { getHeadphones } from "../reducer/Reducer";

const initialState: TypeInitialState = {
  headphones: [],
  quantity: 0,
  price: 0,
  checkOut: false,
  quantityCart: 1,
};
export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    increaseHeadphone: (state) => {
      state.quantityCart = state.quantityCart + 1;
    },
    decreaseHeadphone: (state) => {
      state.quantityCart = state.quantityCart - 1;
    },
    // addToCart: (state, action: PayloadAction<SelectedHeadphone>) => {
    //   const headphone = state.headphones.find(
    //     (item: SelectedHeadphone) => item.id === action?.payload?.id
    //   );
    //   if (headphone === undefined) {
    //     const headphones = [...state.headphones];
    //     headphones.push(action.payload);
    //     state.headphones = headphones;
    //     state.quantity = state.quantity + action.payload.quantity;
    //     state.price = state.price + action.payload.price;
    //   } else if (headphone.color === action.payload.color) {
    //     headphone.quantity = headphone.quantity + action.payload.quantity;
    //     state.quantity = state.quantity + action.payload.quantity;
    //     state.price = state.price + action.payload.price;
    //   }
    // },
    // removeAll: (state) => {
    //   state.headphones = [];
    //   state.quantity = 0;
    //   state.price = 0;
    //   state.checkOut = false;
    // },
    // increase: (state, action: PayloadAction<SelectedHeadphone>) => {
    //   const headphone = state.headphones.find(
    //     (item: SelectedHeadphone) => item.id === action.payload.id
    //   );
    //   if (headphone?.color === action.payload.color) {
    //     headphone.quantity = headphone.quantity + 1;
    //     state.quantity = state.quantity + 1;
    //     state.price = state.price + action.payload.price;
    //   }
    // },
    // decrease: (state, action: PayloadAction<SelectedHeadphone>) => {
    //   const headphone = state.headphones.find(
    //     (item: SelectedHeadphone) => item.id === action.payload.id
    //   );
    //   if (headphone?.color === action.payload.color) {
    //     headphone.quantity = headphone.quantity - 1;
    //     state.quantity = state.quantity - 1;
    //     state.price = state.price - action.payload.price;
    //   }
    // },
    // checkOut: (state) => {
    //   state.checkOut = true;
    // },
  },
  extraReducers: (builder) => {
    builder.addCase(getHeadphones.fulfilled, (state, action) => {
      state.headphones.push(action.payload);
      console.log(action.payload);
    });
  },
});

export const { increaseHeadphone, decreaseHeadphone } = cartSlice.actions;
console.log(initialState);
