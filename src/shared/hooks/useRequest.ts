import { useState } from 'react';
import { RequestLogin } from '../types/requestLogin';
import ConnectionApi, {
  MethodType,
  connectionApiPost,
} from '../functions/connection/connectionApi';
import { ReturnLogin } from './returnLogin';
import { useUserReducer } from '../../store/reducers/useReducer/useUserReducer';
import { useGlobalReducer } from '../../store/reducers/globalReducer/useGlobalReducer';
import { NavigationProp, ParamListBase, useNavigation } from '@react-navigation/native';
import { MenuUrl } from '../../enums/menuUrl';
import { setAuthorizationToken } from '../functions/connection/auth';

interface requestProps<T, B = unknown> {
  url: string;
  method: MethodType;
  saveGlobal?: (object: T) => void;
  body?: B;
  message?: string;
}

export const useRequest = () => {
  const { reset } = useNavigation<NavigationProp<ParamListBase>>();
  const { setUser } = useUserReducer();
  const { setModal } = useGlobalReducer();
  const [loading, setLoading] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string>('');

  const request = async <T, B = unknown>({
    url,
    method,
    saveGlobal,
    body,
    message,
  }: requestProps<T | undefined, B>): Promise<T | undefined> => {
    setLoading(true);
    const returnObject: T | undefined = await ConnectionApi.connect<T, B>(url, method, body)
      .then((result) => {
        if (saveGlobal) {
          saveGlobal(result);
        }
        if (message) {
          setModal({
            visible: true,
            title: 'Sucesso',
            text: message,
          });
        }
        return result;
      })
      .catch((Erro: Error) => {
        setModal({
          visible: true,
          title: 'Erro',
          text: Erro.message,
        });
        return undefined;
      });

    setLoading(false);
    return returnObject;
  };

  const authRequest = async (body: RequestLogin) => {
    setLoading(true);
    await connectionApiPost<ReturnLogin>('http://192.168.2.23:8080/auth', body)
      .then((result) => {
        setAuthorizationToken(result.accessToken);
        setUser(result.user);
        reset({
          index: 0,
          routes: [{ name: MenuUrl.HOME }],
        });
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
    request,
    setErrorMessage,
    authRequest,
  };
};
