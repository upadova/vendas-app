import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { GlobalModalType } from '../../../shared/components/modal/globalModal/globalModal';

interface GlobalStore {
  modal: GlobalModalType;
}

const initialState: GlobalStore = {
  modal: {
    visible: false,
    text: '',
    title: '',
  },
};

export const GlobalSlice = createSlice({
  name: 'globalReducer',
  initialState,
  reducers: {
    setModalAction: (state, action: PayloadAction<GlobalModalType>) => {
      state.modal = action.payload;
    },
  },
});

export const { setModalAction } = GlobalSlice.actions;
export default GlobalSlice.reducer;
