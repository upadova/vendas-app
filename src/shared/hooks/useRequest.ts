import { useState } from 'react';
import { RequestLogin } from '../types/requestLogin';
import { connectionApiPost } from '../functions/connection/connectionApi';
import { ReturnLogin } from './returnLogin';
import { useUserReducer } from '../../store/reducers/useReducer/useUserReducer';
import { useGlobalReducer } from '../../store/reducers/globalReducer/useGlobalReducer';
import { NavigationProp, ParamListBase, useNavigation } from '@react-navigation/native';
import { MenuUrl } from '../../enums/menuUrl';

export const useRequest = () => {
  const { reset } = useNavigation<NavigationProp<ParamListBase>>();
  const { setUser } = useUserReducer();
  const { setModal } = useGlobalReducer();
  const [loading, setLoading] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string>('');

  const authRequest = async (body: RequestLogin) => {
    setLoading(true);
    await connectionApiPost<ReturnLogin>('http://192.168.2.23:8080/auth', body)
      .then((result) => {
        setUser(result.user);
       reset({
        index: 0,
        routes:[{name: MenuUrl.HOME}]
       })
      })
      .catch(() => {
        setModal({
          visible: true,
          title: 'Erro',
          text: 'Usuário ou senha inválidos.',
        });
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
