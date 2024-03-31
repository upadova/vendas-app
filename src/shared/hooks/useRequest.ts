import { useState } from 'react';
import { RequestLogin } from '../types/requestLogin';
import { connectionApiPost } from '../functions/connection/connectionApi';
import { ReturnLogin } from './returnLogin';
import { useUserReducer } from '../../store/reducers/useReducer/useUserReducer';

export const useRequest = () => {
  const { setUser} = useUserReducer();
  const [loading, setLoading] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string>('');

  const authRequest = async (body: RequestLogin) => {
    setLoading(true);
    await connectionApiPost<ReturnLogin>('http://192.168.2.23:8080/auth', body)
      .then((result) => {
        setUser(result.user);
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
