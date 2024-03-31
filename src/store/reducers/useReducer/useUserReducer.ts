import { useDispatch } from 'react-redux';
import { UserType } from '../../../shared/hooks/userType';
import { useAppSelector } from '../../hooks';
import { setUserAction } from '.';

export const useUserReducer = () => {
  const dispatch = useDispatch();
  const { user } = useAppSelector((state) => state.useReducer);

  const setUser = (currentUser: UserType) => {
    dispatch(setUserAction(currentUser));
  };
  return {
    user,
    setUser,
  };
};
