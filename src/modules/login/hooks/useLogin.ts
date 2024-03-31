import { useState } from 'react';
import { NativeSyntheticEvent, TextInputChangeEventData } from 'react-native';
import { useRequest } from '../../../shared/hooks/useRequest';
import { useSelector } from 'react-redux';
import { RootState } from '../../../store';

export const useLogin = () => {
  const {user} = useSelector((state: RootState)=> state.useReducer)
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const { authRequest, errorMessage, setErrorMessage, loading } = useRequest();

  console.log('user', user);
  const handleOnPress = async () => {
    authRequest({
      email,
      password,
    });
  };

  const handleOnChangeEmail = (e: NativeSyntheticEvent<TextInputChangeEventData>) => {
    setErrorMessage('');
    setEmail(e.nativeEvent.text);
  };

  const handleOnChangePassword = (e: NativeSyntheticEvent<TextInputChangeEventData>) => {
    setErrorMessage('');
    setPassword(e.nativeEvent.text);
  };

  return {
    email,
    password,
    errorMessage,
    loading,
    handleOnPress,
    handleOnChangeEmail,
    handleOnChangePassword,
  };
};

