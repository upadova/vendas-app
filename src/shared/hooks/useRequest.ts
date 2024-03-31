import { useState } from 'react';
import { RequestLogin } from '../types/requestLogin';
import { connectionApiPost } from '../functions/connection/connectionApi';
import { ReturnLogin } from './returnLogin';
import { useDispatch } from 'react-redux';
import { setUserAction } from '../../store/reducers/useReducer';

export const useRequest = () => {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string>('');

  const authRequest = async (body: RequestLogin) => {
    setLoading(true);
    await connectionApiPost<ReturnLogin>('http://192.168.2.23:8080/auth', body)
      .then((result) => {
        dispatch(setUserAction(result.user));
      })
      .catch(() => {
        setErrorMessage('Usuário ou senha inválidos.');
      });

    setLoading(false);
  };

  return {
    loading,
    errorMessage,
    setErrorMessage,
    authRequest,
  };
};
