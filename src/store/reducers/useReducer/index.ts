import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { UserType } from '../../../shared/hooks/userType';

interface UserStore {
  user?: UserType;
}

const initialState: UserStore = {
  user: undefined,
};

export const userSlice = createSlice({
  name: 'useReducer',
  initialState,
  reducers: {
    setUserAction: (state, action: PayloadAction<UserType>) => {
      state.user = action.payload;
    },
  },
});

export const { setUserAction } = userSlice.actions;
export default userSlice.reducer;
